import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

import { categoryMoviesRequest, updateActualPage } from "../../actions/";
import { getPaginationBar, capitalizeString } from "../../helpers/";

import MovieCard from "../MovieCard/";

import "./index.scss";

const BASE_CLASS = "Movies";
const TITLE_CLASS = `${BASE_CLASS}-title`;
const CLASS_LIST_CARDS = `${BASE_CLASS}-listCards`;

class MovieListCategory extends Component {
  async componentDidMount() {
    const { query, categoryMoviesRequest, movieLists } = this.props;
    const list = movieLists.filter(
      list => list.query === query && list.page === 1
    )
    if (list.length === 0) categoryMoviesRequest(query, 1)
  }

  async handleClick(ev) {
    const { query , categoryMoviesRequest, updateActualPage, movieLists } = this.props;
    const {
      currentTarget: { name: page }
    } = ev;
    const list = movieLists.filter(
      list => list.query === query && list.page === +page
    );
    if (list.length === 0) categoryMoviesRequest(query, +page)
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
          const title = capitalizeString(query.replace('_', ' '))
          return (
            <div className={BASE_CLASS}>
              <div className={TITLE_CLASS}>
                Category: {title}
                <span className="float-right">Total results: {totalResults}</span>
              </div>
              {getPaginationBar(actualPage, totalPages, this.handleClick.bind(this))}
              <div className={CLASS_LIST_CARDS}>
                {movies.map(movie => (
                  <MovieCard {...movie} key={movie.id} />
                ))}
              </div>
              <br />
              {getPaginationBar(actualPage, totalPages, this.handleClick.bind(this))}
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
  { categoryMoviesRequest, updateActualPage }
)(MovieListCategory);
