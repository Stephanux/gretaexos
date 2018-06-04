var express = require('express');
var router = express.Router();
/* Insert one new user into database. */
router.route('/').post(function (req, res) {
    var type= req.method;
    var path= req.originalUrl;
    console.log('req.originalUrl : ', req.originalUrl);
    GLOBAL.db.collection(global.actions_json[type + path].collection).insert([req.body],
        function (err, result) {
            if (err) {
                throw err;
            }
            console.log('createUser: ', result);
            res.render(global.actions_json[type + path].view, {
                title: 'Creating User without error with datas below :',
                user: result.ops[0]
            });
        } // fin callback de l'insert
    ); // fin de l'insert()
}); // fin de la gestion de la route

module.exports = router;