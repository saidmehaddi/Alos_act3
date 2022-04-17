import meme from '../Models/meme'

export default {
    get_all: (req, res) => {
        res.status(200).json(meme.get_all())
    },

    get: (req, res) => {
        const meme = meme.get(req.params.id)
        if (meme)
            res.status(200).json(meme)
        else res.status(404).json({
            error: 'meme Not Found'
        })
    },

    create: (req, res) => {

        const new_memes = meme.add(req.body)

        res.status(201).json(new_memes)
    },

    update: (req, res) => {

        const id = req.params.id

        const new_memes = meme.update(id, req.body)

        res.status(200).json(new_memes)
    },

    delete: (req, res) => {

        const id = req.params.id

        const new_memes = meme.delete(id)

        res.status(200).json(new_memes)
    },

    get_reviews: (req, res) => {
        const reviews = meme.get_reviews(req.params.id)
        if (reviews != [])
            res.status(200).json(reviews)
        else res.status(404).json({
            error: 'meme Reviews Not Found'
        })
    }
}