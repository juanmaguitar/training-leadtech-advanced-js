describe("function sum", function() {
  
  it("should be defined", function() {
    expect(sum).toBeDefined()
  })
  it("should sum two numbers: sum(2,3) === 5", function() {
    const result = sum(2,3)
    const expectedResult = 5
    expect(result).toEqual(expectedResult)
  })

  it("should sum two numbers: sum(2,5) === 7", function() {
    const result2 = sum(2,5)
    const expectedResult2 = 7
    expect(result2).toEqual(expectedResult2)
  })

  it("should sum numbers as strings: sum(\"2\",4) === 6", function() {
    const result = sum("2",4)
    const expectedResult = 6
    expect(result).toEqual(expectedResult)
  })
})
