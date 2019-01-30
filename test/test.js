const colorFactory = require('../src/factory')
const rgb = require('../src/rgb')
const hex = require('../src/hex')

const RGB = colorFactory(rgb)
const HEX = colorFactory(hex)

var assert = require('assert');

describe('RGB', function() {

  describe('Object creation', function() {
    it('should return an object', function() {
      assert.equal(typeof RGB(0, 0, 0), 'object');
    });
  });

  describe('Object format', function() {
    it('should return "rgb" as format', function() {
      assert.equal(RGB(255, 255, 255).format, 'rgb');
    });
  });

  describe('Function toString()', function() {
    it('should return the correct string', function() {
      assert.equal(RGB(255, 255, 255).toString(), 'rgb(255, 255, 255)');
    });
  });

  describe('RGB color set', function() {
    it('should set the specified color', function() {
      assert.equal(RGB(255, 255, 255).set(0, 0, 0).toString(), 'rgb(0, 0, 0)');
    });
  });

  describe('RGB color conversion', function() {
    it('should return white color as HEX', function() {
      assert.equal(RGB(255, 255, 255).toHex(), 'FFFFFF');
    });
  });
});

describe('HEX', function() {

  describe('Object creation', function() {
    it('should return an object', function() {
      assert.equal(typeof HEX(0, 0, 0), 'object');
    });
  });

  describe('Object format', function() {
    it('should return "rgb" as format', function() {
      assert.equal(HEX('FFFFFF').format, 'hex');
    });
  });

  describe('Function toString()', function() {
    it('should return the correct string', function() {
      assert.equal(HEX('FFFFFF').toString(), '#FFFFFF');
    });
  });

  describe('HEX color set', function() {
    it('should set the specified color', function() {
      assert.equal(HEX('FFFFFF').set('000000').toString(), '#000000');
    });
  });

  describe('HEX color conversion', function() {
    it('should return white color as Array<Number> [R, G, B]', function() {
      assert.deepEqual(HEX('FFFFFF').toRgb(), [255, 255, 255]);
    });
  });
});