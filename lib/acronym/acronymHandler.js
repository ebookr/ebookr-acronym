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
AcronymHandler.prototype.reset = function () {
	this.acronyms = {};
	return this;
};

module.exports = new AcronymHandler();