'use strict'

const some = (arr, func) => {
 return (function someInternal (arrInternal, counter){
  const [head, ...tail] = arrInternal

  return arrInternal.lenght === 0 
  ? false 
  : func(head, counter, arr) 
    ? true : someIntenal(tail, counter + 1)
 })(arr, 0)
}

export default some