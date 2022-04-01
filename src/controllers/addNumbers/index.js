import { parseNumbers, calculateNumbers } from 'services/addNumbers'

const addNumbers = (req, res) => {
  let numbers

  try {
    numbers = parseNumbers(req.body.numbers)
  } catch (err) {
    res.status(400).json({ error: 'Incorrect format for numbers!' })
  }

  const result = calculateNumbers(numbers)

  res.json({
    result,
  })
}

export default addNumbers
