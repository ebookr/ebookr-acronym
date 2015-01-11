var expect = require('chai').expect;

describe('When using acronyms', function () {
	var ebookr, acronym;

	describe('Using <ac>', function () {
		beforeEach(function () {
			ebookr = require('ebookr').new();
			acronym = require('../index')(ebookr);
			ebookr.parse('<acrodef acronym="TLA">Three Letter Acronym</acrodef>');
		});

		it('should render', function () {
			expect(ebookr.parse('<ac>TLA</ac>').render()).to.equal('Three Letter Acronym (TLA)');
		});

		it('should render differently when used', function () {
			expect(ebookr.parse('<ac>TLA</ac>\
<ac>TLA</ac>').render()).to.equal('Three Letter Acronym (TLA)\
<abbr title="Three Letter Acronym">TLA</abbr>');
		});
	});
});