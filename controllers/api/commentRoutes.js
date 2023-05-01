const router = require('express').Router();
const Comment = require('../../models/Comment');


//get all of the comments for a given post
router.get('/:postId', async(req, res) => {
    try {
        const comment = await Comment.findAll(
            {
                where: {
                    post_id: req.params.postId
                }
            })
    } catch (err) {
        res.status(500).json(err);
    }
})


//adds a comment to a specific post
router.post('/:postId', async (req, res) => {
    try {
        const {user_id, content} = req.body
        const newComment = await Comment.create(
            {
                post_id: req.params.postId,
                user_id: user_id,
                content: content
            }
        )
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;