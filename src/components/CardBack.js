import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

const FlipDetails = ({ weight, height, aliases, eyeColor, image, hairColor, work, name, isFlipped } ) => {
    
    return ( 
        <Card style={{ width: '18rem' }} bg="dark">
        <Card.Img variant="top" src={image.url} />            
        <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem text="light" variant="dark">WEIGHT: {weight}
                </ListGroupItem> 
                <ListGroupItem text="light" >
                HEIGHT: {height}</ListGroupItem>
                <ListGroupItem variant="dark">ALIASES: {aliases} 
                </ListGroupItem>
                <ListGroupItem>EYE-COLOR: {eyeColor}
                </ListGroupItem>
                <ListGroupItem variant="dark">HAIR-COLOR: {hairColor}
                </ListGroupItem>
                <ListGroupItem>WORK: {work.occupation}
                </ListGroupItem>
              
            </ListGroup>
            <Card.Body>
            <Button variant="dark" style={{marginLeft: '10px'}} onClick={() => isFlipped(true)}>BACK</Button>
            </Card.Body>
        </Card>
     );
}
 
export default FlipDetails;