import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'


const FrontCard = ({ name, image, powerstats, id, isFlipped, index}) => {
    function deleteChar() {
        let team = JSON.parse(localStorage.getItem('myTeam'));
        team.splice(index, 1);

        team.map((item, index) => {
            if(item.length === 0){
                team.splice(index, 1);
            }
        });
        if(team.length === 0) {
            localStorage.removeItem('myTeam');
        } else {localStorage.setItem('myTeam', JSON.stringify(team));}
        window.location.reload();
        console.log(key)
    }

    return ( 
        <Card style={{ width: '18rem' }} bg="dark">
        <Card.Img variant="top" src={image.url} />            
        <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>INTELLIGENCE: {powerstats.intelligence} 
                <ProgressBar animated variant="danger" now={powerstats.intelligence} />
                </ListGroupItem>
                <ListGroupItem>STRENGH: {powerstats.strength}
                <ProgressBar animated variant="warning" now={powerstats.strength} />
                </ListGroupItem>
                <ListGroupItem>SPEED: {powerstats.speed}
                <ProgressBar animated variant="info" now={powerstats.speed} />
                </ListGroupItem>
                <ListGroupItem>DURABILITY: {powerstats.durability}
                <ProgressBar animated variant="success" now={powerstats.durability} />
                </ListGroupItem>
                <ListGroupItem>POWER: {powerstats.power} 
                <ProgressBar animated variant="danger" now={powerstats.power} />
                </ListGroupItem>
                <ListGroupItem>COMBAT: {powerstats.combat} 
                <ProgressBar animated variant="warning" now={powerstats.combat} />
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Button variant="dark" onClick={()=> deleteChar()} >DELETE</Button>
            <Button variant="dark" style={{marginLeft: '10px'}} onClick={() => isFlipped(false)}>DETAILS</Button>
            </Card.Body>
        </Card>
     );
}
 
export default FrontCard;