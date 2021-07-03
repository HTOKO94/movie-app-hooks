import React from 'react'
import { Card, Button } from 'react-bootstrap'
import "./MoviesCard.css"

function MoviesCard({movie}) {
    return (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <h3>{"⚝".repeat(movie.rate)}</h3>
  </Card.Body>
  <Card.Footer>
  <Button variant="dark">Download</Button>
  </Card.Footer>
  </Card>
       
    )
}

export default MoviesCard
