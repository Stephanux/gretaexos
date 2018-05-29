var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
/* GET users listing. */
router.route('/:_id').post(function (req, res) {
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
                res.render('modifyUser', {
                    title: 'User modified without error',
                    user: result[0]
                });
            }); // fin du find() après update
        } // fin callback de l'update
    ); // fin de l'update()
}); // fin de la gestion de la route

module.exports = router;