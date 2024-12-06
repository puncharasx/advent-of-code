import fs from 'fs'

function main() {
  const input = fs.readFileSync(
    new URL('./input.txt', import.meta.url),
    'utf-8'
  )
  const inputArray = input.trim().split('\n')
  const array2d = inputArray.map((row) =>
    row
      .trim()
      .split(/\s+/)
      .map((num) => parseInt(num, 10))
  )

  let resultPart1 = 0

  for (let i = 0; i < array2d.length; i++) {
    const levels = array2d[i]
    let isIncreasing = null
    let isSafe = true
    for (let j = 0; j < levels.length - 1; j++) {
      const difference = levels[j + 1] - levels[j]

      if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
        isSafe = false
        break
      }

      const currentTrend = difference > 0
      if (isIncreasing === null) {
        isIncreasing = currentTrend
      } else if (isIncreasing !== currentTrend) {
        isSafe = false
        break
      }
    }

    if (isSafe) {
      resultPart1 += 1
    }
  }

  console.log('Part 1 : ', resultPart1)
}

main()
