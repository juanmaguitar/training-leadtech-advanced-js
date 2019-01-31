module.exports = class List {
  constructor (...elements) {
    this.elements = elements
  }

  add (newElement) {
    this.elements[this.elements.length] = newElement
    return this.elements
  }
}
