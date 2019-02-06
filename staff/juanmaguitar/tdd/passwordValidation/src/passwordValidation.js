function passwordValidation(password) {
  const regExp = /^(?=(.*\d){2})/
  return regExp.test(password)
}