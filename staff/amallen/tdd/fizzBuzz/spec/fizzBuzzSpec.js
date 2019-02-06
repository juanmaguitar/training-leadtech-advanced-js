describe("function \"fizzBuzz\"", function() {

    it("should be defined ", function() {
        expect(fizzBuzz).toBeDefined();
    });

    it("should return a \"Fizz\" if result is divided by 3" , function() {
        expect( fizzBuzz(3) === "Fizz").toBe(true);
    });

    it("should return a \"Buzz\" if result is divided by 5" , function() {
        expect( fizzBuzz(5) === "Buzz").toBe(true);
    });

    it("should return a \"FizzBuzz\" if result is divided by 5 and 3" , function() {
        expect( fizzBuzz(15) === "FizzBuzz").toBe(true);
        expect( fizzBuzz(30) === "FizzBuzz").toBe(true);
    });
});