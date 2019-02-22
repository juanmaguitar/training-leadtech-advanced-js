import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import Navbar from '../Navbar/'
import Home from '../Home/'
import MovieListCategory from '../MovieListCategory/'
import MovieListSearch from '../MovieListSearch/'
import Movie from '../Movie/'

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
          <Route path="/popular" render={props => {
            return (
              <MovieListCategory {...props} query = 'popular'/>
            )
          }} />
          <Route path="/now-playing" render={props => {
            return (
              <MovieListCategory {...props} query = 'now_playing'/>
            )
          }} />
          <Route path="/top-rated" render={props => {
            return (
              <MovieListCategory {...props} query = 'top_rated'/>
            )
          }} />
          <Route path="/upcoming" render={props => {
            return (
              <MovieListCategory {...props} query = 'upcoming'/>
            )
          }} />
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
