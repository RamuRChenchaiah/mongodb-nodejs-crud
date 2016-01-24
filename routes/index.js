var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD' });
});


var users = require('../src/resources/users_operations.js')
/* Below CRUD details are self explanatory, I hope */
router.get('/users/all', users.getAllUserDetails);
router.get('/users/:userId', users.getOneUserDetails);

router.post('/users', users.createUserDetails);
router.put('/users/:userId', users.updateUserDetails);
router.delete('/users/:userId', users.removeUserDetails);

module.exports = router;
