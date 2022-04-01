/**
 * Parse Input which can be a list if parsed from JSON or a string if parsed from urlencoded
 */
export const parseNumbers = (numbers) => {
  if (typeof numbers !== 'string' && !Array.isArray(numbers))
    throw new Error('Numbers not in correct format')

  const numArr = typeof numbers === 'string' ? numbers.split(',') : numbers
  return numArr.map(Number)
}

/**
 * Add all numbers together
 */
export const calculateNumbers = (numbers) => numbers.reduce((prev, curr) => prev + curr, 0)
