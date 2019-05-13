# PUFFScoin ENS Namehash 

A javascript library for generating PUFFScoin Decentralized Name Service (ENS) namehashes per [spec](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md).


## Installation

`npm install puffs-ens-namehash -S`

## Usage

```javascript
var namehash = require('puffs-ens-namehash')
var hash = namehash.hash('foo.eth')
// '0xde9b09fd7c5f901e23a3f19fecc54828e9c848539801e86591bd9801b019f84f'

// Also supports normalizing strings to ENS compatibility:
var input = getUserInput()
var normalized = namehash.normalize(input)
```

## Security Warning

ENS Supports UTF-8 characters, and so many duplicate names are possible. For example:

- hightimes.puffs
- hightimes.puffs

The first one has non-ascii chars. (control+F on this page and search for hightimes, only the second one will match).

namehash.normalize() doesn't automagically remap those, and so other precautions should be taken to avoid user phishing.

## Development

This module supports advanced JavaScript syntax, but exports an ES5-compatible module. To re-build the exported module after making changes, run `npm run bundle` (must have [browserify](http://browserify.org/) installed).

