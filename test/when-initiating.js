var expect = require('chai').expect;

describe('When initiating', function () {
	var ebookr;

	beforeEach(function () {
		ebookr = require('ebookr').new();
		require('../index')(ebookr).reset();
	});

	it('should add tokens', function () {
		expect(ebookr.tokens.ac).to.exist;
		expect(ebookr.tokens.acrodef).to.exist;
	});
});