const color = require('../index')
const HEX = color.HEX
const RGB = color.RGB
const HSL = color.HSL

console.log(color)

var assert = require('assert');

describe('RGB', function() {

  describe('Object creation', function() {
    it('should return an object', function() {
      assert.equal(typeof RGB(0, 0, 0), 'object');
    });
  });

  describe('Object format', function() {
    it('should return "rgb" as format', function() {
      assert.equal(RGB(255, 255, 255).format(), 'rgb');
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
      assert.equal(RGB(255, 255, 255).toHex().get(), 'FFFFFF');
    });
  });

  describe('RGB color conversion', function() {
    it('should return white color as HSL', function() {
      assert.deepEqual(RGB(255, 255, 255).toHsl().get(), [0, 0, 1]);
    });
  });
});

describe('HEX', function() {

  describe('Object creation', function() {
    it('should return an object', function() {
      assert.equal(typeof HEX('FFFFFF'), 'object');
    });
  });

  describe('Object format', function() {
    it('should return "rgb" as format', function() {
      assert.equal(HEX('FFFFFF').format(), 'hex');
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
    it('should return white color as RGB', function() {

      assert.deepEqual(HEX('FFFFFF').toRgb().get(), [255, 255, 255]);
    });
  });

  describe('HEX color conversion', function() {
    it('should return white color as HSL', function() {

      assert.deepEqual(HEX('FFFFFF').toHsl().get(), [0, 0, 1]);
    });
  });
});

describe('HSL', function() {

  describe('Object creation', function() {
    it('should return an object', function() {
      assert.equal(typeof HSL(0, 0, 0), 'object');
    });
  });

  describe('Object format', function() {
    it('should return "hsl" as format', function() {
      assert.equal(HSL(0, 0.5, 1).format(), 'hsl');
    });
  });

  describe('Function toString()', function() {
    it('should return the correct string', function() {
      assert.equal(HSL(0, 0.5, 1).toString(), 'hsl(0, 0.5, 1)');
    });
  });

  describe('HSL color set', function() {
    it('should set the specified color', function() {
      assert.equal(HSL(0, 0.5, 1).set(0.666, 0.5, 1).toString(), 'hsl(0.666, 0.5, 1)');
    });
  });

  describe('HSL color conversion', function() {
    it('should return white color as RGB', function() {
      assert.deepEqual(HSL(0, 0.5, 1).toRgb().get(), [255, 255, 255]);
    });
  });

  describe('HSL color conversion', function() {
    it('should return white color as HEX', function() {
      assert.deepEqual(HSL(0, 0.5, 1).toRgb().get(), 'FFFFFF');
    });
  });
});