function peopleWithAgeDrink(age) {
    age = parseInt(age)
    if (age < 0) {
        return "age should be greater than 0!"
    }
    const result = "drink "
    switch (true) {
        case (age < 14):
            return result + "toddy"
        case (age < 18):
            return result + "coke"
        case (age < 20):
            return result + "beer"
        case (age > 20):
            return result + "whisky"    
    }
}