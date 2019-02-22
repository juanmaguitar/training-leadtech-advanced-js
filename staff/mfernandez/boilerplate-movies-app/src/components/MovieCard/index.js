import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { getUrlMovieImages } from '../../services/'

import './index.scss'

const MovieCard = ({ id, title, overview, poster_path, vote_average, vote_count }) => {

  return (
    <Card as={Link} to={`/movie/${id}`} className='MovieCard' style={{ width: '15rem' }}>
      <Card.Img variant="top" src={getUrlMovieImages(poster_path)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {overview.slice(0,100)}...
        </Card.Text>
        <Card.Footer>
          Average {vote_average} / Count: {vote_count}
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
