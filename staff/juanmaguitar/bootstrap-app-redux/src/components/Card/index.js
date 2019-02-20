import React from "react"
import { Card, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { toggleUserSelection as toggleSelected } from "../../actions/"

import "./index.scss"

const BASE_CLASS = "Card"
const CLASS_SELECTED = `${BASE_CLASS}--selected`

const _Card = ({
  email,
  name,
  profile_pic,
  status,
  user_id,
  toggleSelected,
  isSelected
}) => {
  const handleClick = ev => {
    toggleSelected(user_id)
  }

  return (
    <Card style={{ width: "18rem" }} className={isSelected && CLASS_SELECTED}>
      <Card.Img variant="top" src={profile_pic} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{status}</Card.Text>
        <Button onClick={handleClick} variant="primary">
          {email}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(
  null,
  { toggleSelected }
)(_Card)
