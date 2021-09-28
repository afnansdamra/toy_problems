/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const translateRomanNumeral = (romanNumeral) => {
  let num = DIGIT_VALUES[romanNumeral.charAt(0)]
  let curr, prev
  for (let i = 1; i < romanNumeral.length; i++) {
    curr = DIGIT_VALUES[romanNumeral.charAt(i)]
    prev = DIGIT_VALUES[romanNumeral.charAt(i - 1)]
    num = (curr <= prev) ? num + curr : num - prev * 2 + curr
  }

  return num
}

describe('translateRomanNumeral', () => {
  it('test translateRomanNumeral', () => {
    expect(translateRomanNumeral('IV')).toEqual(4)
    expect(translateRomanNumeral('XXI')).toEqual(21)
    expect(translateRomanNumeral('XXVI')).toEqual(26)
    expect(translateRomanNumeral('CI')).toEqual(101)
  })
})
