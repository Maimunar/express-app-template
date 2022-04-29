import { parseNumbers, calculateNumbers } from '../services/addNumbers'
import { ControllerFunction } from '../types/controllers.types'

const addNumbers: ControllerFunction = (req, res) => {
  let numbers

  try {
    numbers = parseNumbers(req.body.numbers)
  } catch (err) {
    res.status(400).json({ error: 'Incorrect format for numbers!' })
    return
  }

  const result = calculateNumbers(numbers)

  res.json({
    result,
  })
}

export default addNumbers
