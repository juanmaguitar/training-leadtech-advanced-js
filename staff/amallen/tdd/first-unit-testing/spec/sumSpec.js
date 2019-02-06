describe("function sum", function() {

    it("should be defined ", function() {
        expect(sum).toBeDefined();
    });

    it("should sum two numbers: sum(2,3) === 5", function() {
        const result = sum(2, 3);
        const resultExpect = 5;
        expect(result).toEqual(resultExpect);
    });

    it("should sum two numbers: sum(2,5) === 7", function() {
        const result = sum(2, 5);
        const resultExpect = 7;
        expect(result).toEqual(resultExpect);
    });

    it("should sum two numbers as strings: sum(\"2\",5) === 7", function() {
        const result = sum("2", 5);
        const resultExpect = 7;
        expect(result).toEqual(resultExpect);
    });

});