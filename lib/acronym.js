var util = require('util');

require('consoleplusplus');

var Acronym = function (acronym, short, full) {
	this.acronym = acronym;
	this.short = short;
	this.full = full;
	this.used = false;
};

var AcronymHandler = function () {
	this.acronyms = {};
};
AcronymHandler.prototype.addAcronym = function (acronym, short, text) {
	this.acronyms[acronym] = this.acronyms[acronym] || new Acronym(acronym, short, text);
};
AcronymHandler.prototype.getAcronym = function (acronym) {
	return this.acronyms[acronym];
};

module.exports = function (ebookr) {
	var acronymHandler = new AcronymHandler();

	ebookr.addParser('ac', function (text) {
		return [text];
	});
	ebookr.addParser('acp', function (text) {
		return [text];
	});
	ebookr.addParser('acrodef', function (acronym, short, text) {
		acronymHandler.addAcronym(acronym, short, text);
	});
	ebookr.addRenderer('ac', function (ac) {
		var acronym = acronymHandler.getAcronym(ac);
		var text = acronym.used
			? util.format('<abbr title="%s">%s</abbr>', acronym.full, ac)
			: util.format('%s (%s)', acronym.full, ac);
		acronym.used = true;
		return text;
	});
	ebookr.addRenderer('acp', function (ac) {
		var acronym = acronymHandler.getAcronym(ac);
		var text = acronym.used
			? util.format('<abbr title="%ss">%ss</abbr>', acronym.full, ac)
			: util.format('%ss (%ss)', acronym.full, ac);
		acronym.used = true;
		return text;
	});

	return acronymHandler;
};