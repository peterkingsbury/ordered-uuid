'use strict';

const should = require('should');

describe('Ordered UUID Tests', function() {
	before(function() {});
	after(function() {});

	it('should be able to load the Ordered UUID library', function() {
		const OrderedUuid = require('../index');
	});

	it('should be able to generate an ordered UUID', function() {
		const OrderedUuid = require('../index');
		let uuid = OrderedUuid.generate();
		should(uuid.length).equal(32);
	});

	it('should be able to convert a UUID string to a Binary buffer', function() {
		const OrderedUuid = require('../index');
                let uuid = OrderedUuid.generate();
		let buffer = OrderedUuid.toBinary16(uuid);
		should(typeof buffer).equal('object');
		should(buffer.toString('hex')).equal(uuid);
	});

        it('should be able to convert a Binary-buffer UUID to a string', function() {
                const OrderedUuid = require('../index');
                let uuid = OrderedUuid.generate();
                let buffer = OrderedUuid.toBinary16(uuid);
		let str = OrderedUuid.fromBinary16(buffer);
                should(str).equal(uuid);
        });


});

