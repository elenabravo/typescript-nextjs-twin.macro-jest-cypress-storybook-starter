import { expect } from '@jest/globals'
import sayHello from './sayHello'

describe('sayHello function', () => {
  it("should return the proper greeting when a user doesn't pass a name", () => {
    expect(sayHello()).toEqual('Hello human!')
  })

  it('should return the proper greeting with the name passed', () => {
    expect(sayHello('Evgeny')).toEqual('Hello Evgeny!')
  })
})
