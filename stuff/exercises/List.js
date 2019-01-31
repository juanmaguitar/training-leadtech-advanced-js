class List extends Array {
	constructor(...values) {
		super(...values)
	}
	add(value) {
		this[this.length] = value
	}
}

> const list = new List(23,4,3,3)
> list.add(2)
> list // List(5) [23, 4, 3, 3, 2]