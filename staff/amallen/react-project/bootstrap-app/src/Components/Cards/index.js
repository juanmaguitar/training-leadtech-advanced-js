import React from 'react'
import { Card, Button } from 'react-bootstrap'

const _Card = ({email, name, profile_pic, status, user_id}) => (    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ profile_pic } />
        <Card.Body>
            <Card.Title>{ name }</Card.Title>
            <Card.Text>
            {status}
            </Card.Text>
            <Button variant="primary">{email}</Button>
        </Card.Body>
    </Card>
)

export default _Card 