var util = require('util'),
		acronymHandler = require('../acronym/acronymHandler');

module.exports.parser = function (text) {
	return [text];
};
module.exports.renderer = function (ac) {
	var acronym = acronymHandler.getAcronym(ac);
	var text = acronym.used
		? util.format('<abbr title="%ss">%ss</abbr>', acronym.full, ac)
		: util.format('%ss (%ss)', acronym.full, ac);
	acronym.used = true;
	return text;
};
