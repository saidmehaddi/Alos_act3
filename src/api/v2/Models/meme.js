import memes from '../../../../database/memes.json'
import reviews from '../../../../database/reviews.json'
import hosts from '../../../../database/hosts.json'
import {
    writeFileSync
} from 'fs'


export default {
    get_all() {
        return memes
    },

    get(id) {
        const meme = memes.find(meme => meme.id == id)

        return meme
    },


    add(meme) {
        let new_memes = [
            ...memes,
            {
                ...meme,
                "id": Date.now().toString(36)
            }
        ]
        const new_data = JSON.stringify(new_memes)

        writeFileSync("database/memes.json", new_data)

        return new_memes
    },


    update(id, data) {
        let index = memes.findIndex(meme => meme.id == id)
        Object.entries(data).map(([key, value]) => {
            memes[index][key] = value
        });

        const new_data = JSON.stringify(memes)

        writeFileSync("database/memes.json", new_data)

        return memes
    },

    delete(id) {
        let index = memes.findIndex(meme => meme.id == id)

        memes.splice(index, 1)
        delete_hosts(id)
        const new_data = JSON.stringify(memes)

        writeFileSync("database/memes.json", new_data)

        return memes
    },

    get_hosts(meme_id) {

        return hosts.filter(host => host.meme_id == meme_id)
    },

    get_reviews(meme_id) {
        return reviews.filter(review => review.meme_id == meme_id)
    }
}