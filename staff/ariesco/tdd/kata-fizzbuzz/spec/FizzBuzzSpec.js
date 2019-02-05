describe("Function fizzBuzz", function() {

  it("Function fizzBuzz exists", function() {
    expect(fizzBuzz).toBeDefined();
  });

  it("If number is divisible by 3 returns 'Fizz'", function() {
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(21)).toBe('Fizz');
  });

  it("If number is divisible by 5 returns 'Buzz'", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it("If number is not divisible by 3 and 5 returns empty string", function() {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(7)).toBe('7');
    expect(fizzBuzz(4)).toBe('4');
    expect(fizzBuzz(2)).toBe('2');
  });

  it("If number is divisible by 3 and 5 returns 'FizzBuzz'", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

});

describe("Function oneHandred", function() {

  it("Function oneHandred exists", function() {
    expect(oneHandred).toBeDefined();
  });

  it("Function passed to oneHandred is called 100 times", function() {
    let numCalls = 0;
    const mockFunc = () => ++numCalls;
    oneHandred(mockFunc);
    expect(numCalls).toBe(100);
  });

  it("Function passed to oneHandred is called 100 times", function() {
    let numCalls = 0;
    const mockFunc = () => ++numCalls;
    oneHandred(mockFunc);
    expect(numCalls).toBe(100);
  });

  it("Function oneHandred called with to fizzBuzz returns a correct array of values", function() {
    expect(oneHandred(fizzBuzz)[2]).toBe('Fizz');
    expect(oneHandred(fizzBuzz)[14]).toBe('FizzBuzz');
  });

});