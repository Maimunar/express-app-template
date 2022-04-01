import 'dotenv/config'

export const RAND_INT = 1
export const RAND_BOOL = false
export const RAND_OBJ = { random: 'random' }

// HealthCheck
export const REAL_CHECK_INFO = {
  healthStatus: 'online',
  port: process.env.PORT || 8000,
}

// AddNumbers
export const CORRECT_NUMS_STRING = '1,2'
export const CORRECT_NUMS_ARR = ['1', '2']
export const CORRECT_RESULT_PARSE = [1, 2]
export const CORRECT_RESULT = 3
