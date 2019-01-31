class List {
  constructor (...items) {
    this.items = items
  }

  add (number) {
    this.items[this.items.length] = number
  }
}

const list = new List(2, 3, 4)
list.add(2)
