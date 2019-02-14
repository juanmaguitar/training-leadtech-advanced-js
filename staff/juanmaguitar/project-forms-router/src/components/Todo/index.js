import React, {Component} from 'react';
import axios from 'axios'

const getUrl = id => `https://jsonplaceholder.typicode.com/todos/${id}`

class Todo extends Component {

  state = {
    todo: {}
  }

  async componentDidMount() {
    const { match: { params: { id }} } = this.props
    const url = getUrl(id)
    const {data: todo} = await axios.get(url)
    this.setState({todo})
  }


  render() {
    const {todo} = this.state
    return (
      <div>
        { JSON.stringify(todo, null, 2) }
      </div>
    )
  } 
}




export default Todo
