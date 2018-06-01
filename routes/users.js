var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var type= req.method;
    var path= req.originalUrl;
  GLOBAL.db.collection('users').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log('users: ', result);
    res.render(global.actions_json[type + path].view, {title: 'List of users', users: result});
  });
});

module.exports = router;
