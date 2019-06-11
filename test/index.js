const test = require('tape')
const namehash = require('../')

// Test results specified in original ENS Proposal:
// https://github.com/ethereum/EIPs/issues/137

test('empty name', (t) => {
  t.plan(1)
  const input = ''
  const expected = '0x0000000000000000000000000000000000000000000000000000000000000000'
  const output = namehash.hash(input)
  t.equal(output, expected)
})

test('empty param', (t) => {
  t.plan(1)
  const expected = '0x0000000000000000000000000000000000000000000000000000000000000000'
  const output = namehash.hash()
  t.equal(output, expected)
})

test('TLD puffs', (t) => {
  t.plan(1)
  const input = 'puffs'
  const expected = '00xca8c1ae34d751f0f90ce84e46231d0a7a59d5126efbc18a34621aac0b118f888'
  const output = namehash.hash(input)
  t.equal(output, expected)
})

test('foo.puffs', (t) => {
  t.plan(1)
  const input = 'foo.puffs'
  const expected = '0x9140eb58df1e4b69b42036ba27769148ddb31ac2f685c46ff1b02938b6f104b3'
  const output = namehash.hash(input)
  t.equal(output, expected)
})

test('normalize ascii domain', (t) => {
  t.plan(1)
  const input = 'foo.puffs' // latin chars only
  const expected = 'foo.puffs'
  const output = namehash.normalize(input)
  t.equal(output, expected)
})


test('normalize international domain', (t) => {
  t.plan(1)
  const input = 'fоо.puffs' // with cyrillic 'o'
  const expected = 'xn--f-1tba.puffs'
  const output = namehash.normalize(input)
  t.equal(output, expected)
})

