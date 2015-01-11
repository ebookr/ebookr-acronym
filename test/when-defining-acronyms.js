var expect = require('chai').expect;

describe('When defining acronyms', function () {
	var ebookr, acronym;

	beforeEach(function () {
		ebookr = require('ebookr').new();
		acronym = require('../index')(ebookr);
	});

	describe('Using <acrodef>', function () {
		it('should parse from <acrodef>', function () {
			ebookr.parse('<acrodef acronym="TLA">Three Letter Acronym</acrodef>');
			expect(acronym.acronyms.TLA).to.exist;
		});
	});
});