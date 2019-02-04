describe("function \"passwordValidation\"", function() {
  it("should exist", function() {
    expect(passwordValidation).toBeDefined()
  })

  it("should return a boolena", function() {
    expect(typeof passwordValidation()).toBe("boolean")
  })

  it("should return false if the password doesn't contain any letter in uppercase (there should be at least one)", function() {
    const password = 'ddddddddddd'
    expect(passwordValidation(password)).toBeFalsy()
  })

  it("should return true if the password contains at least one letter in uppercase", function() {
    const password = 'dddddDddddd'
    expect(passwordValidation(password)).toBeTruthy()
  })

  it("should return false if the password doesn't contain any number (there should be at least 2 numbers/digits) ", function() {
    const password = 'ddddddddddd'
    expect(passwordValidation(password)).toBeFalsy()
  })

  it("should return false if the string doesn't contain at least 2 numbers (digits)", function() {
    const password = 'ddddd22dddd'
    expect(passwordValidation(password)).toBeTruthy()
  })
  
})