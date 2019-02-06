describe("function sum", function() {
  
    it("should be defined", function() {
        expect(sum).toBeDefined();
    });

    it("should sum two numbers: sum(2,3) === 5", function() {
        const result = sum(2,3)
        const expectedResult = 5
        expect(result).toEqual(expectedResult)
    });

    it("should sum two numbers: sum(2,5) === 7", function() {
        const result = sum(2,5)
        const expectedResult = 7
        expect(result).toEqual(expectedResult)
    });
  
    it("should sum numbers as strings: sum(\"2\",5)", function() {
        const result = sum("2",5)
        const expectedResult = 7
        expect(result).toEqual(expectedResult)
    });

    it("should sum numbers as strings: sum(2,\"5\")", function() {
        const result = sum(2,"5")
        const expectedResult = 7
        expect(result).toEqual(expectedResult)
    });
  });