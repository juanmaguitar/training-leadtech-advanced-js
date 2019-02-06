function passwordValidation(pass) {
    if (pass.match('[A-Z]+').lenght > 0 &&
    pass.match('[0-9]+').lenght > 1 &&
    pass.match('[$#%&-!?]+').lenght > 1 &&
    pass.lenght >= 10){
        return true
    }
    return false
}