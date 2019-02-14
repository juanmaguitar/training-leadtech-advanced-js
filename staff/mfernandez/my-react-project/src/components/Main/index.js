import React, {Component} from 'react';
import Counter from './Counter/'
import ListItem from './ListItem/'
import './index.css'
import App from '../App';

// const Main = () =>(
//   <div className="Main">
//     <h1>Main</h1>
//     <Counter />
//     <ListItem/>
//   </div>
// )

class Main extends App {

  render (){
    cons
    return (
      <ul>
        {
          this.state.users.map(({name},index) => {
            return <li key={index}>{name}</li>
          })
        }
      </ul>
    )
  }
}

export default Main;
