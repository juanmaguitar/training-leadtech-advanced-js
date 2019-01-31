function password(pass) {
    return function () {
        return pass
    }
}

var readPassword = password("123456")
readPassword()
readPassword()
