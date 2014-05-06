var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/nodetest1", {native_parser:true});
var BSON = require('mongodb').BSONPure;

Provider = {
	getCollection: function (collectionName,callback) {
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

		this.getCollection(config.collectionName, function (error, collection) {
			if (error) {
				that.sendError(res, error);
			} else {
				if (findAll) {
					collection.find().sort(config.sort).toArray(output);
				} else {
					collection.findOne({ _id: new BSON.ObjectID(req.params.id) }, output);
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

module.exports = Provider;