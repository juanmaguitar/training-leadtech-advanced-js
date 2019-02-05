describe("Funcion peopleWithAgeDrink", function() {

  it("Function peopleWithAgeDrink exists", function() {
    expect(peopleWithAgeDrink).toBeDefined();
  });

  it("Should return 'drink toddy' when the age passed is under 14", function() {
    expect(peopleWithAgeDrink(1)).toBe('drink toddy');
    expect(peopleWithAgeDrink(13)).toBe('drink toddy');
  });

  it("Should return 'drink coke' when the age passed is between 14 and 17", function() {
    expect(peopleWithAgeDrink(14)).toBe('drink coke');
    expect(peopleWithAgeDrink(17)).toBe('drink coke');
  });

  it("Should return 'drink beer' when the age passed is between 18 and 20", function() {
    expect(peopleWithAgeDrink(18)).toBe('drink beer');
    expect(peopleWithAgeDrink(19)).toBe('drink beer');
  });

  it("Should return 'drink whisky' when the age passed is over 20", function() {
    expect(peopleWithAgeDrink(21)).toBe('drink whisky');
    expect(peopleWithAgeDrink(99)).toBe('drink whisky');
  });
});