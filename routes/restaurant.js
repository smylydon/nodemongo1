var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.json({
		author: "Michael Godden",
		app: "Restaurant",
		ver: "0.0.1"
	});
});

router.get('/tables', function (req, res) {
	req.Provider.findAll({
		req: req,
		res: res,
		tagName: 'tables',
		collectionName: 'tables',
		sort: {table: 1}
	});
});

router.get('/tables/:id', function (req, res) {
	req.Provider.findById({
		req: req,
		res: res,
		tagName: 'table',
		collectionName: 'tables',
	});
});

router.get('/foods', function (req, res) {
	req.Provider.findAll({
		req: req,
		res: res,
		tagName: 'foods',
		collectionName: 'food',
	});
});

router.get('/foods/:id', function (req, res) {
	req.Provider.findById({
		req: req,
		res: res,
		tagName: 'food',
		collectionName: 'food',
	});
});

router.get('/tabitems', function (req, res) {
	req.Provider.findAll({
		req: req,
		res: res,
		tagName: 'tabitems',
		collectionName: 'tabitems',
	});
});

router.get('/tabitems/:id', function (req, res) {
	req.Provider.findById({
		req: req,
		res: res,
		tagName: 'tabitem',
		collectionName: 'tabitems',
	});
});

router.get('/tabs', function (req, res) {
	req.Provider.findAll({
		req: req,
		res: res,
		tagName: 'tabs',
		collectionName: 'tabs',
	});
});

router.get('/tabs/:id', function (req, res) {
	req.Provider.findById({
		req: req,
		res: res,
		tagName: 'tab',
		collectionName: 'tabs',
	});
});

module.exports = router;