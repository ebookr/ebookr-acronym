require('consoleplusplus');

var acronymHandler = require('./acronym/acronymHandler');

// tags
var ac = require('./tags/ac'),
		acp = require('./tags/acp'),
		acrodef = require('./tags/acrodef');

module.exports = function (ebookr) {
	ebookr.addParser('ac', ac.parser);
	ebookr.addParser('acp', acp.parser);
	ebookr.addParser('acrodef', acrodef.parser);
	ebookr.addRenderer('ac', ac.renderer);
	ebookr.addRenderer('acrodef', acrodef.renderer);
	ebookr.addRenderer('acp', acp.renderer);

	return acronymHandler;
};