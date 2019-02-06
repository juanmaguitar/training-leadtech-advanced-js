describe("function passwordValidation ", function() {
  it("should be define ", function() {
    expect(passwordValidation).toBeDefined();
  });

  it("should return boolean ", function() {
    expect(typeof passwordValidation("test")).toBe("boolean");
  });

  it("should return true when the string contains at least one letter in uppercase ", function() {
    var result = passwordValidation("testpass22%");
    expect(result).toBeFalsy();
  });

  it("should return true when the string contains at least 2 numbers (digits) ", function() {
    var result = passwordValidation("tespass2T%");
    expect(result).toBeFalsy();
  });

  it("should return true when the string contains at least one of these special characters: $ # % & - ! ? ", function() {
    var result = passwordValidation("tesTpass22G");
    expect(result).toBeFalsy();
  });

  it("should return true when the string has 10 characters or more ", function() {
    var result = passwordValidation("tesTs22%");
    expect(result).toBeFalsy();
  });

  it("should return true when the string contains all conditions ", function() {
    var result = passwordValidation("testTApass22%");
    expect(result).toBeTruthy();
  });
});
