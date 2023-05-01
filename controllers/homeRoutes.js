const router = require('express').Router();

module.exports = router;

router.get('/', (req, res) => {
    res.render('home', {title:"Tech Blog"});
})

router.get('/login', (req, res) => {
    res.render('login');
})