class List {
    constructor (...params) {
      this.list = [...params]
    }
  
    add (num) {
      this.list = [...this.list, num]
      return this.list
    }
  }