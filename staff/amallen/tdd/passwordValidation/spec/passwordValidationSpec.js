describe("function \"passwordValidation\"", function() {

    it("should be defined ", function() {
        expect(passwordValidation).toBeDefined();
    });

    it("should return a boolean", function() {
        expect(passwordValidation()).toBe(true);
    });

    it("should return true when the string contains at least one letter in uppercase", function() {
        const password = "dddddDddddd";
        expect(passwordValidation("password")).toBeTruthy();
    });

    it("should return true when the string contains at least one letter in uppercase", function() {
        const password = "dddddddddd";
        expect(passwordValidation("password")).toBeFalsy();
    });

    it("should return true when the string contains at least 2 numbers (digits)", function() {
        const password = "dP43df";
        expect(passwordValidation("password")).toBeTruthy();
    });

    it("should return true when the string doesn't contains at least 2 numbers (digits)", function() {
        const password = "dddddd";
        expect(passwordValidation("password")).toBeFalsy();
    });

   /* it("should return a \"Fizz\" if result is divided by 3" , function() {
        expect( fizzBuzz(3) === "Fizz").toBe(true);
    });

    it("should return a \"Buzz\" if result is divided by 5" , function() {
        expect( fizzBuzz(5) === "Buzz").toBe(true);
    });

    it("should return a \"FizzBuzz\" if result is divided by 5 and 3" , function() {
        expect( fizzBuzz(15) === "FizzBuzz").toBe(true);
        expect( fizzBuzz(30) === "FizzBuzz").toBe(true);
    });*/
});