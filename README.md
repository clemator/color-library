# color-library
This is my color utility library. It helps a lot for converting colors.

> Who can use my library?

This library is designed for UX designers that do not know how to code and want a quick and easy way to use.

Supported formats:
  * Rgb
  * Hsl
  * Hex

Working on:
  * Xyz

### Installation
```javascript
npm install
```

### Build
```javascript
npm run build
```

### Test
```javascript
npm run test
```

### Develop
```javascript
npm run start
```

## Factories

### RGB(r, g, b)
Initialize your RGB color:
```javascript
const red = RGB(255, 0, 0)
```

### HEX(str)
Initialize your hexa color:
```javascript
const hex = HEX('FF0000')
```

### HSL(h, s, l)
Initialize your HSL color:
```javascript
const hsl = HSL(0, 0.5, 1)
```

## Public API

### .toString()
Get your color on string format:
```javascript
const red = RGB(255, 0, 0).toString()      //-> "rgb(255, 0, 0)"
const green = HEX('00FF00').toString()     //-> "#00FF00"
const blue = HSL(0.666, 1, 0.5).toString() //-> "hsl(0.666, 1, 0.5)"
```

### .get()
Get the color value:
```javscript
const red = RGB(255, 0, 0).get()           //-> [255, 0, 0]
const green = HEX('00FF00').get()          //-> '00FF00'
const blue = HSL(0.666, 1, 0.5).get()      //-> [0.666, 1, 0.5]
```

### .set()
*Chainable*
Set the color value:
```javscript
const blue = RGB(255, 0, 0).set(0, 0, 255)
const red = HEX('00FF00').set('FF0000')
const green = HSL(0.666, 1, 0.5).set(0.333, 1, 0.5)
```

### .format()
Return the color format:
```javascript
const red = RGB(255, 0, 0).format()        //-> "rgb"
const green = HEX('00FF00').format()       //-> "hex"
const blue = HSL(0.666, 1, 0.5).format()   //-> "hsl"
```

### .toRgb()
*Chainable*
Get color value to RGB format:
```javscript
var red = HEX('FF0000').toRgb().get()      //-> [255, 0, 0]
```

### .toHex()
*Chainable*
Get color value to HEX format:
```javscript
var red = HSL(0, 0.5, 1).toHex().get()     //-> 'FF0000'
```

### .toHsl()
*Chainable*
Get color value to HSL format:
```javscript
var red = RGB(255, 0, 0).toHsl().get()     //-> [0, 0.5, 1]
```