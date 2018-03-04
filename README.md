# var_dump-js

[![Build Status](https://travis-ci.org/mrprompt/var_dump-js.svg?branch=master)](https://travis-ci.org/mrprompt/var_dump-js)
[![Maintainability](https://api.codeclimate.com/v1/badges/26179051e38b3a963ade/maintainability)](https://codeclimate.com/github/mrprompt/var_dump-js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/26179051e38b3a963ade/test_coverage)](https://codeclimate.com/github/mrprompt/var_dump-js/test_coverage)

## Install

```console
npm i --save-dev var_dump-js
```

## Usage

```javascript
const var_dump = require('var_dump-js');

const test = { foo: 'barbar' };

console.log(var_dump(test));
```

## Testing

```console
npm test
```