var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  GLOBAL.db.collection("countries").find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    //console.log(result);
    res.render('countries', {title: 'Liste countries', country: result});
  });
});
module.exports = router;