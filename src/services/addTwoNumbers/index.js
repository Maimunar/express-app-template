/**
 * Parse Input which can be a list if parsed from JSON or a string if parsed from urlencoded
 */
export const parseNumbers = (numbers) => {
  const numArr = typeof numbers === 'string' ? numbers.split(',') : numbers
  return numArr.map(Number)
}

/**
 * Add all numbers together
 */
export const addNumbers = (numbers) => numbers.reduce((prev, curr) => prev + curr, 0)
