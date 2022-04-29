//@ts-nocheck
import {
  CORRECT_NUMS_STRING,
  CORRECT_RESULT,
  INCORRECT_NUM_FORMAT,
  RAND_BOOL,
  RAND_INT,
} from '../utils/constants'
import addNumbers from '../../src/controllers/addNumbers'

describe('Add Numbers Integration', () => {
  it('Should Return the correct result as response', () => {
    let req, res, spy
    req = res = {}
    req.body = {
      numbers: CORRECT_NUMS_STRING,
    }
    spy = res.json = jest.fn()

    addNumbers(req, res)

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith({ result: CORRECT_RESULT })
  })

  it('Should return a status 400 message upon given a wrong request body', () => {
    let req, res, spy
    req = res = {}
    req.body = {
      numbers: RAND_INT,
    }
    spy = jest.fn()

    res = {
      status: jest.fn((responseStatus) => {
        expect(responseStatus).toStrictEqual(400)
        return {
          json: spy,
        }
      }),
      json: spy,
    }
    addNumbers(req, res)

    expect(spy).toHaveBeenCalledWith({ error: INCORRECT_NUM_FORMAT })
  })
})
