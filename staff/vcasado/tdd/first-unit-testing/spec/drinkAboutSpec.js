describe("people drink", function() {
 
  it("should be defined", function(){
    expect(peopleWithAgeDrink).toBeDefined()
  });

  it("age is a number", function(){
    const age = "abcde"
    expect(peopleWithAgeDrink(age)).toBe(undefined)
  });

  it("should accept number as string", function(){
    const age = "12"
    expect(peopleWithAgeDrink(age)).toBe("drink toddy")
  });

  it("age is greater than 0", function(){
    const age = -1
    expect(peopleWithAgeDrink(age)).toBe("age should be greater than 0!")
  });

  it("should return \"drink toddy\" when age < 14", function(){
    expect(peopleWithAgeDrink(5)).toBe("drink toddy")
    expect(peopleWithAgeDrink(13)).toBe("drink toddy")
  });

  it("should return \"drink coke\" when age between 14 and 17", function(){
    expect(peopleWithAgeDrink(15)).toBe("drink coke")
  });

  it("should return \"drink coke\" when age between 18 and 20", function(){
    expect(peopleWithAgeDrink(19)).toBe("drink beer")
  });

  it("should return \"drink coke\" when age > 20", function(){
    expect(peopleWithAgeDrink(22)).toBe("drink whisky")
  });
 
 });