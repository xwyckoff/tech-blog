const router = require('express').Router();
const User = require('../../models/User');

router.get('/', (req, res) => {
    const users = User.findAll();
    return users.map(user => user.get());
})

module.exports = router;