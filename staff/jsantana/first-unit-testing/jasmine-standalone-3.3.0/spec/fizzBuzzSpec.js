describe("Fizz Buzz function", function(){
    it("should be defined", function(){
        expect(fizzBuzz).toBeDefined()
    })

    it("should return Fizz when number is a multiple of 3", function(){
        expect(fizzBuzz(3)).toBe("Fizz")
    })

    it("should return Buzz when number is a multiple of 5", function(){
        expect(fizzBuzz(5)).toBe("Buzz")
    })

    it("should return FizzBuzz when number is a multiple of 3 and 5", function(){
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })

    it("should return the number when number is not a multiple of 3 nor 5", function(){
        expect(fizzBuzz(17)).toBe(17)
    })
})