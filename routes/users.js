var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res) {
	var db = req.db;

	db.collection('usercollection').find().toArray(function (err, items) {
		//res.json(items);
		if(!err) {
			res.json( { items: items });
		} else {
			res.send('{ error: ' + err.message + '}');
		}
	});
});

module.exports = router;
