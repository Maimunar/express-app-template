import { ParsedNumbers, UnparsedNumbers } from '@src/types/addNumbers.types'

/**
 * Parse Input which can be a list if parsed from JSON or a string if parsed from urlencoded
 */
export const parseNumbers = (numbers: UnparsedNumbers) => {
  if (typeof numbers !== 'string' && !Array.isArray(numbers))
    throw new Error('Numbers not in correct format')

  const numArr = typeof numbers === 'string' ? String(numbers).split(',') : numbers
  return numArr.map(Number)
}

/**
 * Add all numbers together
 */
export const calculateNumbers = (numbers: ParsedNumbers) =>
  numbers.reduce((prev, curr) => prev + curr, 0)
