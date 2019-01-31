function List(...values) {
  this.items = values
}
List.prototype.add = function (number){
  this.items[this.items.length] = number
  return this.items
}

let list = new List(1,2,3)