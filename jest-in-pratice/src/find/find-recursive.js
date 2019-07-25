'use strict'

const find = (arr, func) => {
  return (function findInternal(arrIntenral, counter){
    const [head, ...tail] = arrIntenral

    return arrIntenral.length === 0 
    ? undefined 
    : func(head, counter, arr) 
      ? head
      : findInternal(tail, counter + 1)
  })(arr, 0)
} 

export default find