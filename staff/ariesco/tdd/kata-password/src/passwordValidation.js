function passwordValidation (pass) {
    console.log(!/[A-Z]+/g.exec(pass))
    if (!/[A-Z]+/g.exec(pass)) {
        return false;
    }
    console.log(!/[0-9]{2:}/g.exec(pass))
    if (!/[0-9]{2:}/g.exec(pass)) {
        return false;
    }
    console.log(!/[$#%&-!\?]+/g.exec(pass))
    if (!/[$#%&-!\?]+/g.exec(pass)) {
        return false;
    }

    if (pass.length < 10) {
        return false;
    }

    return true
}