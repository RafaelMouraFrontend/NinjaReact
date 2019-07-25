'use strict'

const isInitialValueUndefined = (initialValue) => initialValue === undefined

const mainReduce = (arr, func, initialValue) => {
  const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue
  const arrCopy =isInitialValueUndefined(initialValue) ? arr.slice(1) : arr

  return(function reduceInternal (accInternal, arrInernal, counter) {
    const [head, ...tail] = arrInernal

    return arrInernal.length === 0
    ? accInternal
    : reduceInternal(func(accInternal, head, counter, arrCopy), tail, counter + 1)

  })(acc, arrCopy, 0)
}

export default mainReduce
