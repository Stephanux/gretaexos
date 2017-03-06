var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

/* Insert one new user into database. */
router.route('/:_id').get(function (req, res) {
    console.log('req.originalUrl : ', req.originalUrl);
    GLOBAL.db.collection('users').remove({_id: new ObjectID(req.params._id)},
        function (err, result) {
            if (err) {
                throw err;
            }
            console.log('createUser: ', result);
            GLOBAL.db.collection("users").find().toArray(function(err, listusers) {
                res.render('users', {
                    title: 'List of users :',
                    users: listusers
                });
            });
        } // fin callback de l'insert
    ); // fin de l'insert()
}); // fin de la gestion de la route

module.exports = router;