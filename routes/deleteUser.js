var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* Delete one new user into database. */
router.route('/:_id').get(function (req, res) {
    // ici on a un élément en plus _id dans l'URL "/deleteUser/5b0d5e95488eaf5161489a1e"
    // on découpe l'url et on ne récupère que le premier élément du tableau "deleteUser"
    // on ajoute devant un "/"
    var path = '/' + req.originalUrl.split('/')[1];
    var type = req.method;
    console.log('req.originalUrl : ', req.originalUrl);
    GLOBAL.db.collection('users').remove({_id: new ObjectID(req.params._id)},
        function (err, result) {
            if (err) {
                throw err;
            }
            console.log('createUser: ', result);
            GLOBAL.db.collection("users").find().toArray(function(err, listusers) {
                res.render(global.actions_json[type+path].view, {
                    title: 'List of users :',
                    users: listusers
                });
            });
        } // fin callback du Delete
    ); // fin de l'insert()
}); // fin de la gestion de la route
module.exports = router;