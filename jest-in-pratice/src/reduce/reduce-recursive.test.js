'use strict'

import { expect } from 'chai'
import reduce from './reduce-recursive'
import reduceRightRecursive from './reduce-right-recursive'

it('expect reduce to be a function', () => {
  expect(reduce).to.be.a('function')
})

it('reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {
  const before = reduce([1, 2, 3], (acc, item) => acc + item, 0)
  expect(before).to.be.equal(6)
})

it('reduce([2, 3, 4], (acc, item) => acc + item, 0) should return 9', () => {
  const before = reduce([2, 3, 4], (acc, item) => acc + item, 0)
  expect(before).to.be.equal(9)
})

it('reduce([2, 3, 4], (acc, item) => acc + item) should return 9', () => {
  const before = reduce([2, 3, 4], (acc, item) => acc + item)
  expect(before).to.be.equal(9)
})

it('reduce([1, 2], (acc, item) => { acc["number-" + item] = item; return acc}, {}) should return {"number-1": 1, "number-2": 2}', () => {
  const before = reduce([1, 2], (acc, item) => { 
    acc["number-" + item] = item; 
    return acc
  }, {})
  const after = {"number-1": 1, "number-2": 2}
  expect(before).to.be.deep.equal(after)
})

it('reduce([1, 2], (acc, item, index) => acc + index, 0) should return 1', () => {
  const before = reduce([1, 2], (acc, item, index) => acc + index, 0)
  const after = 1
  expect(before).to.be.equal(after)
})

it('reduce([1, 2], (acc, item, index, arr) => acc + arr[index], 0) should return 3', () => {
  const before = reduce([1, 2], (acc, item, index, arr) => acc + arr[index], 0)
  const after = 3
  expect(before).to.be.equal(after)
})

it('reduceRightRecursive(["el", "fa", "ra"], (acc, item) => acc + item, "") should return "rafael"', () => {
  const before = reduceRightRecursive(["el", "fa", "ra"], (acc, item) => acc + item, "") 
  const after = 'rafael'
  expect(before).to.be.equal(after)
})