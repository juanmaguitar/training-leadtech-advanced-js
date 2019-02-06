describe("function fizzBuzz ", function() {
  it("should be define ", function() {
    expect(peopleWithAgeDrink).toBeDefined();
  });

  it("should return a array ", function() {
    var result = fizzBuzz();
    expect(typeof result).toBe("object");
  });

  it("should return number 8 when is 8 ", function() {
    var result = fizzBuzz(8);
    var expectedResult = 8;
    expect(result).toEqual(expectedResult);
  });

  it("should return Fizz when is 3 ", function() {
    var result = fizzBuzz(3);
    var expectedResult = "Fizz";
    expect(result).toEqual(expectedResult);
  });

  it("should return Buzz when is 5 ", function() {
    var result = fizzBuzz(5);
    var expectedResult = "Buzz";
    expect(result).toEqual(expectedResult);
  });

  it("should return FizzBuzz when is 15 ", function() {
    var result = fizzBuzz(15);
    var expectedResult = "FizzBuzz";
    expect(result).toEqual(expectedResult);
  });

  it("should return a array of 100 elements", function() {
    var result = fizzBuzz();
    expect(result.length).toEqual(100);
  });

});
