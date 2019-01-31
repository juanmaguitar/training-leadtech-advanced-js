class List {
    constructor (...params) {
      this.list = [...params]
    }
  
    add (num) {
      this.list = [...this.list, num]
      return this.list
    }
  }
  
  const list = new List(1, 2, 3)

  console.log(list.list)
  console.log(list.add(4))
  console.log(list.add(5))