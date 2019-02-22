import React, { Component } from 'react'
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import { connect } from 'react-redux'

import { movieDataRequest } from '../../actions/'
import { getUrlMovieImages } from '../../services/'

const IMAGE_SIZE = 'xlarge'

class Movie extends Component {

  async componentDidMount() {
    const { match: {params: {id}}, movieDataRequest, movies } = this.props;
    if (movies.filter(movie => movie.id === +id).length === 0) {
      movieDataRequest(+id)
    }
  }
 
  loadingList = () => (
    <Container>
      <Alert variant="primary">
        <Alert.Heading>Loading......</Alert.Heading>
      </Alert>
    </Container>
  )
  
  render() {
    const {fetching, status, error} = this.props
    const {loadingList} = this
    switch (status) {
      case 'success':
      if (fetching) return loadingList()
      else {
        const {movies, actualMovieId} = this.props
        const movie = movies.filter(movie => movie.id === actualMovieId)[0]
        const {poster_path, title, overview} = movie
        return(
            <Container>
              <Row>
                <h1>{title}</h1>
              </Row>
              <Row>
                <Col>
                  <Image src={getUrlMovieImages(poster_path, IMAGE_SIZE)} fluid />;
                </Col>
                <Col>
                  {overview}
                </Col>
              </Row>
            </Container>
          )
        }
      case 'error':
        if (fetching) return loadingList()
        else {
          return(
            <Container>
              <Alert variant="danger">
                <Alert.Heading>Something goes wrong!</Alert.Heading>
                <p>{error}</p>
              </Alert>
            </Container>
          )
        }
      default: return loadingList()
    }
  }
}

const mapStateToProps = ({movieData: {movies, actualMovieId, fetching, status, error}}) => ({movies, actualMovieId, fetching, status, error})

export default connect(
  mapStateToProps,
  {movieDataRequest}
)(Movie)
