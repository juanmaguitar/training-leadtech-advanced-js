describe("Function passwordValidation", function() {

  it("Function passwordValidation exists", function() {
    expect(passwordValidation).toBeDefined();
  });

  it("Should return true (valid password) if the string contains at least one letter in uppercase, 2 numbers, one of these special characters: $ # % & - ! ? and 10 characters or more", function() {
    expect(passwordValidation('2A1%asdasdasdssss')).toBeTruthy();
  });

});