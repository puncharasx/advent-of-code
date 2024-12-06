import fs from 'fs'

/**
 * @param {string} input
 * @returns {[number[], number[]]}
 */
function inputToArray(input) {
  const lines = input.trim().split('\n')
  const leftArray = []
  const rightArray = []

  lines.forEach((line) => {
    const [left, right] = line.trim().split(/\s+/)

    leftArray.push(parseInt(left, 10))
    rightArray.push(parseInt(right, 10))
  })

  return [leftArray, rightArray]
}

function main() {
  const input = fs.readFileSync(
    new URL('./input.txt', import.meta.url),
    'utf-8'
  )
  const [left, right] = inputToArray(input)
  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)

  let result = 0

  for (let i = 0; i < left.length; i++) {
    const diff = left[i] - right[i]
    result += Math.abs(diff)
  }
  console.log('Part 1: ', result)

  // Part 2

  let resultPart2 = 0
  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < right.length; j++) {
      if (left[i] === right[j]) {
        resultPart2 += left[i]
      } else {
        resultPart2 += 0
      }
    }
  }
  console.log('Part 2:', resultPart2)
}

main()
