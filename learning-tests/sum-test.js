const sum = require('./sum')

console.assert(
  typeof sum === 'function',
  'should be is a funcion'
)

console.assert(
  sum(1, 2) === 3,
  'should be return 3'
)

console.log('all tests passed!');
