import React, {Component} from 'react'
import { connect } from "react-redux"

import {getPopularMovies as _getPopularMovies} from '../../actions'

import Card from '../Card/'
import './index.scss'

const BASE_CLASS = 'Users'
const CLASS_LIST_CARDS = `${BASE_CLASS}-listCards`

class Popular extends Component {

  componentDidMount() {
    const {getPopularMovies} = this.props
    getPopularMovies()
  }

  render() {
    const { isLoading, hasError, movies } = this.props
    return (
      <div className={BASE_CLASS}>
        <h2>{movies.length} movies</h2>
        <div className={CLASS_LIST_CARDS}>
          {
            movies
              .map(movie => (
                <Card 
                  {...movie}
                  key={movie.id}
                />
              ))
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ popular: { isLoading, hasError, movies } }) => ({ isLoading, hasError, movies })

const mapDispatchToProps = dispatch => {
  return {
      getPopularMovies: () => dispatch(_getPopularMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popular)

// export default Users