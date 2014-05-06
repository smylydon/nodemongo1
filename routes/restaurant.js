var express = require('express');
var BSON = require('mongodb').BSONPure;
var router = express.Router();

/* GET users listing. */
Mongodb = {
	getCollection: function (db,collectionName,callback) {
		db.collection(collectionName, function (error, collection) {
			if (error) {
				callback(error);
			} else {
				callback(null, collection);
			}
		})
	},

	find: function (config, findAll) {
		var that = this;
		var res = config.res;
		var req = config.req;
		var db = req.db;

		var output = function (error, docs) {
			var tagName = config.tagName +'';
			if(!error) {
				var object = {};
				object[tagName] = docs;
				res.json(object);
			} else {
				that.sendError(res,error);
			}
		};

		this.getCollection(db, config.collectionName, function (error, collection) {
			if (error) {
				that.sendError(res, error);
			} else {
				if (findAll) {
					collection.find().sort(config.sort).toArray(output);
				} else {
					try{
						collection.find({ _id: new BSON.ObjectID(req.params.id) }).toArray(output);
					} catch (e) {
						that.sendError(res, e);
					}
				}
			}
		});
	},

	findAll: function (config) {
		config.sort = config.sort || {};
		this.find(config, true);
	},

	findById: function (config) {
		this.find(config, false);
	},

	sendError: function(res,error) {
		res.json({
			error: error.message,
			code: error.code
		});
	}
};

router.get('/', function(req, res) {
	res.json({
		author: "Michael Godden",
		app: "Restaurant",
		ver: "0.0.1"
	});
});

router.get('/tables', function(req, res) {
	Mongodb.findAll({
		req: req,
		res: res,
		tagName: 'tables',
		collectionName: 'tables',
		sort: {table: 1}
	});
});

router.get('/tables/:id', function(req, res) {
	Mongodb.findById({
		req: req,
		res: res,
		tagName: 'table',
		collectionName: 'tables',
	});
});

router.get('/foods', function(req, res) {
	Mongodb.findAll({
		req: req,
		res: res,
		tagName: 'foods',
		collectionName: 'food',
	});
});

router.get('/tabitems', function(req, res) {
	Mongodb.findAll({
		req: req,
		res: res,
		tagName: 'tabitems',
		collectionName: 'tabitems',
	});
});

router.get('/tabitems/:id', function(req, res) {
	Mongodb.findById({
		req: req,
		res: res,
		tagName: 'tabItem',
		collectionName: 'tabitems',
	});
});

router.get('/tabs', function(req, res) {
	Mongodb.findAll({
		req: req,
		res: res,
		tagName: 'tabs',
		collectionName: 'tabs',
	});
});

router.get('/tabs/:id', function(req, res) {
	Mongodb.findById({
		req: req,
		res: res,
		tagName: 'tab',
		collectionName: 'tabs',
	});
});

module.exports = router;