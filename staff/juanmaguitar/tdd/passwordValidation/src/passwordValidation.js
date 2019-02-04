function passwordValidation(password) {
  const regExp = /[A-Z]+(.*\d){2}/
  return regExp.test(password)
}