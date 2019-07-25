'use strict'

import mainReduce from './main-reduce-recursive'
import reverse from './../reverse/reverse-recursive'

const reduceRightRecursive = (arr, ...params) => mainReduce(reverse(arr), ...params)

export default reduceRightRecursive