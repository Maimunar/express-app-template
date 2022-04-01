import { parseNumbers, addNumbers } from 'services/addTwoNumbers'

const addTwoNumbers = (req, res) => {
  const numbers = parseNumbers(req.body.numbers)
  const result = addNumbers(numbers)

  res.json({
    result,
  })
}

export default addTwoNumbers
