var acronymHandler = require('../acronym/acronymHandler');

module.exports.parser = function (acronym, short, text) {
	acronymHandler.addAcronym(acronym, short, text);
};
module.exports.renderer = function () {
	return '';
};