import { isValidEmail } from '../../src/util/emailUtils'

describe('emailUtils', () => {
  describe('isValidEmail', () => {
    it('validates emails correctly', () => {
      const testEmailOne = 'some@email.com'
      const testEmailTwo = '@email.com'
      const testEmailThree = 'hello@123.0'
      const testEmailFour = 'hello_hello@email.com'

      expect(isValidEmail(testEmailOne)).toBeTruthy()
      expect(isValidEmail(testEmailTwo)).toBeFalsy()
      expect(isValidEmail(testEmailThree)).toBeFalsy()
      expect(isValidEmail(testEmailFour)).toBeTruthy()
    })
  })
})

