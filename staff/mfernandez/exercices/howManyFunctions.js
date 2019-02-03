function howManyFunction() {
    var num_veces = 0
    return function () {
        return ++num_veces
    }
}

var llamar = howManyFunction()
llamar()
llamar() 
