# ml-distance-euclidean

<h3 align="center">
  
  <a href="https://www.zakodium.com">
   <img src="https://www.zakodium.com/brand/zakodium-logo-white.svg" width="50" alt="Zakodium logo" />
  </a>
  
  <p>
    Maintained by <a href="https://www.zakodium.com">Zakodium</a>
  </p>

[![NPM version](https://img.shields.io/npm/v/ml-distance-euclidean.svg)](https://www.npmjs.com/package/ml-distance-euclidean)
[![npm download](https://img.shields.io/npm/dm/ml-distance-euclidean.svg)](https://www.npmjs.com/package/ml-distance-euclidean)
[![test coverage](https://img.shields.io/codecov/c/github/mljs/spectra-processing.svg)](https://codecov.io/gh/mljs/spectra-processing)
[![license](https://img.shields.io/npm/l/ml-distance-euclidean.svg)](https://github.com/mljs/spectra-processing/blob/main/LICENSE)

</h3>

Compute the euclidean distance between two vectors

## Installation

`$ npm install ml-distance-euclidean`

## API

```js
const { euclidean, squaredEuclidean } = require('ml-distance-euclidean');

euclidean([0, 1, 4, 6, 2], [3, 6, 9, 4, 3]); // 8
```

### euclidean(p, q)

Returns the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance#n_dimensions) between vectors p and q.

### squaredEuclidean(p, q)

Returns the [squared Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance) between vectors p and q.

## License

[MIT](./LICENSE)
