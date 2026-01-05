# english-number-naming

A JavaScript library to convert numbers to their English word representations.

## Installation

```bash
npm install english-number-naming
```

## Usage

```javascript
const { numberToEnglish } = require('english-number-naming');

console.log(numberToEnglish(123)); // "one hundred twenty-three"
console.log(numberToEnglish(0)); // "zero"
console.log(numberToEnglish(-5)); // "minus five"
console.log(numberToEnglish(3.14)); // "three point one four"
```

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

## License

ISC