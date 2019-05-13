# PUFFScoin ENS Namehash 

A javascript library for generating PUFFScoin Decentralized Name Service (ENS) namehashes per [spec](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md).


## Installation

`npm install puffs-ens-namehash -S`

## Usage

```javascript
var namehash = require('puffs-ens-namehash')
var hash = namehash.hash('hightimes.puffs')
// '0x97d646968c2906f9cdd7541c82c3491b41e5142cd8ef658961ebf85dbe3d719b'

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

