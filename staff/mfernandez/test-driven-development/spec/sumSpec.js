describe("function sum", function() {
  it("should be define ", function() {
    expect(sum).toBeDefined()
  })

  it("should sum two numbers 2,3 === 5", function() {
    var result = sum(2, 3)
    var expectedResult = 5
    expect(result).toEqual(expectedResult)
  });

  it("should sum two numbers 5,7 === 12", function() {
    var result = sum(5, 7)
    var expectedResult = 12
    expect(result).toEqual(expectedResult)
  });

  it("should sum string numbers \"2\",\"5\" === 7", function() {
    var result = sum("2", "5")
    var expectedResult = 7
    expect(result).toEqual(expectedResult)
  })
 });
