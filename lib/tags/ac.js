var util = require('util'),
		acronymHandler = require('../acronym/acronymHandler');

module.exports.parser = function (text) {
	return [text];
};
module.exports.renderer = function (ac) {
	var acronym = acronymHandler.getAcronym(ac);
	var text = acronym.used
		? util.format('<abbr title="%s">%s</abbr>', acronym.full, ac)
		: util.format('%s (%s)', acronym.full, ac);
	acronym.used = true;
	return text;
};