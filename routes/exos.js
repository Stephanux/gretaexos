var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  GLOBAL.db.collection('exercices').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
    res.render('exos', {title: 'Express', exos: result[0]});
  });
});

module.exports = router;