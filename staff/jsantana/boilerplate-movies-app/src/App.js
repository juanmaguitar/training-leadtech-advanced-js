import React, { Component } from 'react';
import axios from 'axios'

import {API_KEY} from './credentials'
const getURL = apiKey => `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`

class App extends Component {
  async componentDidMount() {
    const url = getURL(API_KEY)
    const {data} = await axios.get(url)
    console.log(data)
  }
  render() {
    return (
      <div className="App">
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
