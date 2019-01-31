class List {
    constructor(...values) {
        this.items = values
    }

    add(value) {
        this.items[this.items.lenght] = value
    }
}

var list_var = new List(2,3,4,5)

list_var.add(5)
list_var.add(6)
console.log(list_var.items)

