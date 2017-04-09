const express = require('express');
const co = require('co-express');

const controller = require('../controllers/index');

const router = express.Router();

// main page
router.get('/' , (req , res , next) => {
    res.render('index.ejs');
})

// root component template
router.get('/main' , (req , res , next) => {
    res.render('main.ejs');
})

// recipe list template
router.get('/list' , (req , res, next) => {
    res.render('list.ejs');
})

// receipe list data
router.get('/getList' , co( function *(req , res , next)  {
    let data = yield controller.getList(req,res,next);   
    res.json(data);
}))


router.get('/add' , (req , res, next) => {
    res.render('add.ejs');
})

router.post('/addrecipe' , co( function *(req , res , next)  {
    let data = yield controller.addRecipe(req , res , next);
    res.json(data);
}))

router.post('/addcomments' , co( function * (req , res , next)  {
    let data = yield controller.addComments(req , res , next);
    res.json(data);
}))

router.get('/search' , (req , res , next) => {
    res.render('search.ejs');
})

module.exports = router;