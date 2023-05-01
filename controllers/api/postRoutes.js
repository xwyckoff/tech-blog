const router = require('express').Router();
const Post = require('../../models/Post');


//get all posts, include the user that posted it as well as the comments associated with the post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [User, Comment]
        });
        res.json(posts.map(post => post.get()));
    } catch (err) {
        res.status(500).json(err);
    }
})

//get a specific post by its ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        res.json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

//create a new post
router.post('/', async (req, res) => {
    try {
        const {userId, title, content} = req.body;
        const newPost = await Post.create(
            {
                userId: userId,
                title: title,
                content: content
            }
        )

        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

//update a specific post's title and content
router.put('/:id', async (req, res) => {
    try {
        const {title, content} = req.body;
        const updatedPost = await Post.update(
            {
                title: title,
                content: content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
    } catch (err) {
        res.status(500).json(err);
    }
})