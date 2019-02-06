describe("function peopleWithAgeDrink", function() {
  it("should be define ", function() {
    expect(peopleWithAgeDrink).toBeDefined()
  })

  it("should be return a string ", function() {
    var result = peopleWithAgeDrink(13)
    expect(typeof(result)).toBe("string")
  })

  it("should drink toddy when age is 13 ", function() {
    var result = peopleWithAgeDrink(13)
    var expectedResult = "drink toddy"
    expect(result).toEqual(expectedResult)
  })

  it("should drink coke when age is 14 ", function() {
    var result = peopleWithAgeDrink(14)
    var expectedResult = "drink coke"
    expect(result).toEqual(expectedResult)
  })

  it("should drink coke when 14 <= age < 18 ", function() {
    var result = peopleWithAgeDrink(17)
    var expectedResult = "drink coke"
    expect(result).toEqual(expectedResult)
  })

  it("should drink beer when 18 <= age < 21 ", function() {
    var result = peopleWithAgeDrink(18)
    var expectedResult = "drink beer"
    expect(result).toEqual(expectedResult)
  })

  it("should drink whisky when 21 <= age ", function() {
    var result = peopleWithAgeDrink(30)
    var expectedResult = "drink whisky"
    expect(result).toEqual(expectedResult)
  })
})
