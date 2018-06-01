var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
/* GET users listing. */
router.route('/:_id').post(function (req, res) {
    var type= req.method;
    var path= "/" + req.originalUrl.split('/')[1];
    console.log('req.originalUrl : ', req.originalUrl);
    GLOBAL.db.collection('users').update({
            _id: new ObjectID(req.params._id)
        }, {
            $set: req.body
        },
        function (err, result) {
            if (err) {
                throw err;
            }
            console.log('modifyUser: ', result);
            GLOBAL.db.collection('users').find({
            _id: new ObjectID(req.params._id)
        }).toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                console.log('users: ', result);
                res.render(global.actions_json[type + path].view, {
                    title: 'User modified without error',
                    user: result[0]
                });
            }); // fin du find() après update
        } // fin callback de l'update
    ); // fin de l'update()
}); // fin de la gestion de la route

module.exports = router;