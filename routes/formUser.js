var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET user from _id into url */
router.route('/:_id').get(function (req, res) {
    console.log('req.originalUrl : ', req.originalUrl);
    GLOBAL.db.collection('users').find({
        _id: new ObjectID(req.params._id)
    }).toArray(function (err, result) {
        if (err) {
            throw err;
        }
        console.log('formUser: ', result);
        res.render('formUser', {
            title: "Form user\'s datas",
            libelle: "modification",
            form_action: "/modifyUser",
            user: result[0] // il n'y a qu'une réponse possible donc un seul élément dans le tableau
        });
    });
});

module.exports = router;