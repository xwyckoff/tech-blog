const router = require('express').Router();
const User = require('../../models/User');

//return all of the users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users.map(user => user.get()));
    } catch(err) {
        res.status(500).json(err);
    }
});


//return a user by their ID
router.get('/:id', async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id)
        res.json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})

//create a new user
router.post('/', async (req, res) => {
    try {
        const {username, password} = req.body;
        const createdUser = await User.create({
            username: username,
            password: password
        })

        res.json(createdUser);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;