import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Container, Button, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

const Totals = ({ team }) => {
    const [teamAverage, setTeamAverage] = useState([]);
    const [sumHeight, setSumHeight] = useState([]);
    
        
        
        useEffect(() =>{
    let array = JSON.parse(localStorage.getItem('myTeam'));
    let powerStat = {};
    var heightCm = 0;
    var weightKg = 0;
            for(let i =0; i<array.length;i++){
                for(let key in array[i][0].powerstats){
                    let sum = powerStat[key] || 0;
                    powerStat[key] = sum += Number.parseInt(array[i][0].powerstats[key]);
                }
             }
    let temp = [];
    let index = 0;
    for(var item in powerStat){
        temp.push([item, powerStat[item]])
    }
    temp.sort((a, b) => a[1] - b[1])
    setTeamAverage(() => {for(let i=0; i < temp.length; i++){
        teamAverage.push(temp[i])
    };
        return teamAverage})
        for(let i =0; i<array.length;i++){
            let sumWk = weightKg || 0;
            let sumHc = heightCm || 0;
            weightKg = sumWk += Number.parseInt(array[i][0].appearance['weight'][1]);
            heightCm = sumHc += Number.parseInt(array[i][0].appearance['height'][1]);

            index++;
            }
         weightKg = weightKg / index;
         heightCm = Math.round(heightCm / index);
         let arraySum = [];
         arraySum.push(heightCm, weightKg)
            setSumHeight(() => arraySum)
        


        
    }, [])
    return (  
<Container variant="dark" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} fluid>
        <h1 style={{ textAlign:  'center', border: '#000 solid 4px', backgroundColor: '#000'}}>Total stats of Team</h1>
        <h2 style={{ textAlign:  'center', border: '#000 solid 4px', backgroundColor: '#000'}}>Your team's best powerstat is {teamAverage[5] && teamAverage[5][0] || "null"} </h2>
        <Card style={{ width: '30rem', margin: '10px',}} bg="dark">
        <Card.Body>
                <Card.Title>Totals</Card.Title>
        </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{teamAverage[5] && teamAverage[5][0]}: {teamAverage[5] && teamAverage[5][1]}
                <ProgressBar animated variant="danger" now={teamAverage[5] && teamAverage[5][1]} />
                </ListGroupItem>
                <ListGroupItem> {teamAverage[4] && teamAverage[4][0]}: {teamAverage[4] && teamAverage[4][1]}
                <ProgressBar animated variant="warning" now={teamAverage[4] && teamAverage[4][1]} />
                </ListGroupItem>
                <ListGroupItem>{teamAverage[3] && teamAverage[3][0]}: {teamAverage[3] && teamAverage[3][1]}
                <ProgressBar animated variant="info" now={teamAverage[3] && teamAverage[3][1]} />
                </ListGroupItem>
                <ListGroupItem>{teamAverage[2] && teamAverage[2][0]}: {teamAverage[2] && teamAverage[2][1]}
                <ProgressBar animated variant="success" now={teamAverage[2] && teamAverage[2][1]} />
                </ListGroupItem>
                <ListGroupItem>{teamAverage[1] && teamAverage[1][0]}: {teamAverage[1] && teamAverage[1][1]}
                <ProgressBar animated variant="danger" now={teamAverage[3] && teamAverage[1][1]} />
                </ListGroupItem>
                <ListGroupItem>{teamAverage[0] && teamAverage[0][0]}: {teamAverage[0] && teamAverage[0][1]} 
                <ProgressBar animated variant="warning" now={teamAverage[0] && teamAverage[0][1]} />
                </ListGroupItem>
                <ListGroupItem>Average Weight: {sumHeight && sumHeight[1]} Kgs.
                </ListGroupItem>
                <ListGroupItem>Average Height: {sumHeight && sumHeight[0]} Cms.
                </ListGroupItem>
            </ListGroup>
           
        </Card>
  
    
</Container>    )
}
 
export default Totals;