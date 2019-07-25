'use strict'

import mainReduce from './main-reduce'
import reverse from './../reverse/reverse'

const reduceRight = (arr, ...parans) => mainReduce (reverse(arr), ...parans)

export default reduceRight