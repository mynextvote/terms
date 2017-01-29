# Terms

[![Build Status](https://travis-ci.org/mynextvote/terms.svg?branch=master)](https://travis-ci.org/mynextvote/terms)

Terms helps with finding term lengths for elected officials in different
US states.

At present terms for the upper and lower houses and executives for all 50 states
are included. 

Terms represents term lengths as integers, so a 2 year term  will be represented
as 2.

## Usage

```js
import { getTerms } from 'mnv-terms'

const { house, senate, governor } = getTerms('CA')

console.log(house)    // 2
console.log(senate)   // 4
console.log(governor) // 4
```

## Reporting innacuracies

If you find an innacuracy please file an issue noting the state and the office
or feel free to submit a pull request.

