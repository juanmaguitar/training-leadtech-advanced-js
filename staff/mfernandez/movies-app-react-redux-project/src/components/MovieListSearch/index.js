import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

import { searchMoviesRequest, updateActualPage } from "../../actions/";
import { getPaginationBar } from "../../helpers/";

import MovieCard from "../MovieCard/";

import "./index.scss";

const BASE_CLASS = "Movies";
const TITLE_CLASS = `${BASE_CLASS}-title`;
const CLASS_LIST_CARDS = `${BASE_CLASS}-listCards`;

class MovieListSearch extends Component {
  async componentDidMount() {
    const { match: { params: {query}}, searchMoviesRequest, movieLists } = this.props;
    const list = movieLists.filter(
      list => list.query === query && list.page === 1
    )
    if (list.length === 0) searchMoviesRequest(query, 1)
  }

  async componentDidUpdate() {
    const { match: { params: {query}}, searchMoviesRequest, movieLists } = this.props;
    const list = movieLists.filter(
      list => list.query === query && list.page === 1
    )
    if (list.length === 0) searchMoviesRequest(query, 1)
  }

  async handleClick(ev) {
    const { match: { params: {query}} , searchMoviesRequest, updateActualPage, movieLists } = this.props;
    const {
      currentTarget: { name: page }
    } = ev;
    const list = movieLists.filter(
      list => list.query === query && list.page === +page
    );
    if (list.length === 0) searchMoviesRequest(query, +page)
    else updateActualPage(+page)
  }

  loadingList = () => (
    <div className={BASE_CLASS}>
      <Alert variant="primary">
        <Alert.Heading>Loading......</Alert.Heading>
      </Alert>
    </div>
  );

  render() {
    const { fetching, status, error } = this.props;
    const { loadingList } = this;

    switch (status) {
      case "success":
        if (fetching) return loadingList();
        else {
          const { movieLists, actualQuery, actualPage } = this.props;
          const movieList = movieLists.filter(
            list => list.query === actualQuery && list.page === +actualPage
          )[0]
          const { query, movies, totalPages, totalResults } = movieList;
          const paginationBar = (movies.length === 0) ? '' : getPaginationBar(actualPage, totalPages, this.handleClick.bind(this)) 
          return (
            <div className={BASE_CLASS}>
              <div className={TITLE_CLASS}>
                Search: {query}
                <span className="float-right">Total results: {totalResults}</span>
              </div>
              {paginationBar}
              <div className={CLASS_LIST_CARDS}>
                {movies.map(movie => (
                  <MovieCard {...movie} key={movie.id} />
                ))}
              </div>
              <br />
              {paginationBar}
            </div>
          );
        }
      case "error":
        if (fetching) return loadingList();
        else {
          return (
            <div className={BASE_CLASS}>
              <Alert variant="danger">
                <Alert.Heading>Something goes wrong!</Alert.Heading>
                <p>{error}</p>
              </Alert>
            </div>
          );
        }
      default:
        return loadingList();
    }
  }
}

const mapStateToProps = ({
  movieListData: { movieLists, actualQuery, actualPage, fetching, status, error }
}) => ({ movieLists, actualQuery, actualPage, fetching, status, error });

export default connect(
  mapStateToProps,
  { searchMoviesRequest, updateActualPage }
)(MovieListSearch);
