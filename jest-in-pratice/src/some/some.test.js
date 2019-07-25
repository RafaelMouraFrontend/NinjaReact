'use strict'

import { expect } from 'chai'
import some from './some'

it('expect some to be a function', () => {
  expect(some).to.be.a('function')
})

it('some([], (item) => item) shoud return false', () => {
  expect(some([], (item) => item)).to.not.ok
})

it('some([1, 2], (item) => item) should to be return true', () => {
  expect(some([1, 2], (item) => item)).to.be.ok
})

it('some([1, 2, 3], (item, index) => index % 2 === 0) should to be return true', () => {
  expect(some([1, 2, 3], (item, index) => index % 2 === 0)).to.be.ok
})

it('some([1, 2, 3], (item, index, arr) => arr.indexOf(2) === 1) should to be return true', () => {
  expect(some([1, 2, 3], (item, index, arr) => arr.indexOf(2) === 1)).to.be.ok
})