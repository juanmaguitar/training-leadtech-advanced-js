describe("function \"drinkAbout\"", function() {

    it("should be defined ", function() {
        expect(drinkAbout).toBeDefined();
    });

    it("should return a string", function() {
        const expectType = "string";
        expect(typeof drinkAbout() ).toBe(expectType);
    });

    it("should return \"drink toddy\" when called w/ value lower than 14", function() {
        const expectResult = "drink toddy";
        expect(drinkAbout(12) ).toBe(expectResult);
    });

    it("should return \"drink coke\" when called w/ value lower than 18", function() {
        const expectResult = "drink coke";
        expect(drinkAbout(16) ).toBe(expectResult);
    });

    it("should return \"drink beer\" when called w/ value lower than 21", function() {
        const expectResult = "drink beer";
        expect(drinkAbout(20) ).toBe(expectResult);
    });

    it("should return \"drink whisky\" when called w/ value greater than 21", function() {
        const expectResult = "drink whisky";
        expect(drinkAbout(25) ).toBe(expectResult);
    });



});