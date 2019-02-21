import React from "react"
import { Card } from "react-bootstrap"

import "./index.scss"

const BASE_CLASS = "Card"

const _Card = ({
  title,
  overview,
  poster_path
}) => {
  

  return (
    <Card style={{ width: "18rem" }} >
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default _Card
