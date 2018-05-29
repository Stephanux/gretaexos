	var mongoose = require('mongoose');
	mongoose.connect('mongodb://127.0.0.1:27017/gretajs', function (err) {
	    if (err) {
	        throw err;
	    } else console.log('Connected');
	});

	mongoose.connection.on("error", function () {
	    console.log("Erreur de connexion à la base de données")
	});
	mongoose.connection.on("open", function () {
	    console.log("Connexion réussie à la base de données");
	});

	/* Schema mongoose instacié sur collection "countries" */
	var countriesSchema = new mongoose.Schema({
	    _id: {
	        type: mongoose.Schema.ObjectId
	    },
	    code: {
	        type: String
	    },
	    name: {
	        type: String
	    }
	});

	/* Association entre la collection "countries" et le schéma */
	var country = mongoose.model('Countries', countriesSchema, 'countries');

	/* On obtient un Model permettant d'exécuter des requêtes */
	country.find({ code: "FR"}, function (err, comms) {
	    if (err) {
	        throw err;
	    }
	    // comms est un tableau de hash
	    console.log(comms);
	    mongoose.connection.close();
	});