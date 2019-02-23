import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import Navbar from '../Navbar/'
import Home from '../Home/'
import MovieListCategory from '../MovieListCategory/'
import MovieListSearch from '../MovieListSearch/'
import Movie from '../Movie/'

import { CATEGORIES } from '../../constants'

const categoriesGenerator = () => CATEGORIES.map(category => {
  return (
    <Route key={category} path={`/${category}`} render={props => {
      return (
        <MovieListCategory {...props} query={category.replace('-', '_')}/>
      )
    }} />
  )
})

class App extends Component {

  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Switch>
            <Redirect from='/search/q/' to='/' exact />
            <Route path="/search/q/:query" render={props => {
              return (
                <MovieListSearch {...props} query/>
              )
            }} />
          </Switch>
          {
            categoriesGenerator()
          }
          <Route path="/movie/:id" render={props => {
            return (
              <Movie {...props} id/>
            )
          }} />
        </Container>
      </Router>  
    );
  }
}

export default App;
