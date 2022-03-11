var express = require('express');
var router = express.Router();
const {User} = require('../lib/models')


// REST API
// CREATE
// UPDATE
// READ
// DELETE
// CRUD operations

// Users
// Accounts

// /users GET
router.get('/users', async function(req, res, next) {
    let allUsers = await User.findAll({})
    res.json(allUsers)
});
// /users/24 GET
router.get('/users/:id', async function(req, res, next) {
    let userId = req.params.id
    let user = await User.findOne({where: {id: userId}})
    res.json(user)
});
// /users/24 PUT /Exercise


// /users/24 DELETE


// /users POST
router.post('/users', async function(req, res, next) {
    console.log('req.body', req.body)
    let user = await User.create(req.body)
    res.json(user)
});


// DATABASE AND ROUTES





/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('this is the home page of the API router')
});

// GET
/*router.get('/users', function(req, res, next) {
    res.send('The users are listed out here')
});*/

// router.get('/users/:userId/:firstName', function(req, res, next) {
//     console.log('req.params are', req.params)
//     console.log('req.params are', req.params.userId)
//     console.log('req.query are', req.query)
//     res.send('The spits out the information for user id = ' + req.params.userId)
// });

// router.post('/users', function(req, res, next) {
//
//     // req.body
//     // write code here that grabs the information from req.body and stores it in the Mysql
//     console.log('req.body is', req.body)
//     res.send('The user was created!')
// });



// router.get('/something', function(req, res, next) {
//     res.json({success: true})
// });

module.exports = router;
