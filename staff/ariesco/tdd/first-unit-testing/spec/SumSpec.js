describe("function sum", function() {
  it("function sum is defined", function() {
    expect(sum).toBeDefined();
  });

  it("should sum two numbers: sum(2,3) === 5", function() {
    expect(sum(2,3)).toEqual(5);
  });

  it("should sum two numbers: sum(5,3) === 8", function() {
    expect(sum(5,3)).toEqual(8);
  });

  it("should sum numbers as strings", function() {
    expect(sum("5",3)).toEqual(8);
    expect(sum(5,"3")).toEqual(8);
  });

});