describe("function \"drinkAbout\"", function() {
  it("should exist", function() {
    expect(drinkAbout).toBeDefined()
  })

  it("should return a string", function() {
    const expectedType = "string"
    expect(typeof drinkAbout()).toBe(expectedType)
  })

  it("should return \"drink toddy\" when called w/ value lower than 14", function() {
    const expectedResult = "drink toddy"
    expect(drinkAbout(12)).toBe(expectedResult)
  })

  it("should return \"drink coke\" when called w/ value lower than 18", function() {
    const expectedResult = "drink coke"
    expect(drinkAbout(16)).toBe(expectedResult)
  })

  it("should return \"drink beer\" when called w/ value lower than 21", function() {
    const expectedResult = "drink beer"
    expect(drinkAbout(20)).toBe(expectedResult)
  })

  it("should return \"drink whisky\" when called w/ value greater than 21", function() {
    const expectedResult = "drink whisky"
    expect(drinkAbout(25)).toBe(expectedResult)
  })
})