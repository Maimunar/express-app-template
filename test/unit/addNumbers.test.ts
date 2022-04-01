import { parseNumbers, calculateNumbers } from '../../src/services/addNumbers'
import {
  CORRECT_NUMS_ARR,
  CORRECT_NUMS_STRING,
  CORRECT_RESULT,
  CORRECT_RESULT_PARSE,
  RAND_BOOL,
  RAND_INT,
  RAND_OBJ,
} from '../utils/constants'

describe('Add Numbers', () => {
  it('should parse numbers correctly with a string', () => {
    const numbers = parseNumbers(CORRECT_NUMS_STRING)
    expect(numbers).toStrictEqual(CORRECT_RESULT_PARSE)
  })
  it('should parse numbers correctly with an array', () => {
    const numbers = parseNumbers(CORRECT_NUMS_ARR)
    expect(numbers).toStrictEqual(CORRECT_RESULT_PARSE)
  })
  it('should throw an error on different format than string an array', () => {
    expect(() => parseNumbers(RAND_INT)).toThrow()
    expect(() => parseNumbers(RAND_BOOL)).toThrow()
    expect(() => parseNumbers(RAND_OBJ)).toThrow()
  })
  it('should calculate correct result given the parsed input', () => {
    const numbers = calculateNumbers(CORRECT_RESULT_PARSE)
    expect(numbers).toStrictEqual(CORRECT_RESULT)
  })
})
