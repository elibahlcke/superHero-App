import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Results = ({ name, image, id, biography}) => {
  const [currChar, setCurrChar] = useState([]);
  const role = biography.alignment === 'good' ? 'Hero' : 'Villain';
  let result = [];

  function findChar() {

        axios.get(process.env.RESULT_URL + id, ).catch(function (error) {
    alert(error);
    }).then(function (response) {
        console.log(response);
        if(response['data']['response'] === 'success'){
          result.push(response['data']);
          
        } 
        })
      }
      function checkCharacter(myTeam){
        let heroes = 0;
        let villains = 0;
        let exist = false;
        let team = myTeam.flat();
        if(team.length < 6) {
          team.forEach((obj) => {
                obj.biography.alignment === 'good' ? heroes++ : villains++;
                if(obj.id === id){
                exist = true;
        }});
        if(!exist){
          if(role === 'Hero' && heroes > 2){
            alert('You can only choose 3 heroes');
            return false;
          }
          if(role === 'Villain' && villains > 2){
            alert('You can only choose 3 villains');
            return false;
          }
          return true
        }
        alert('You already have this character -try again-')
    } 
      else if(team.length === 6) {alert("You can't have more than 6 team members :(");}
      return false;
  }
      
      function addNewChar(){
        const myTeam = localStorage.getItem('myTeam') ? JSON.parse(localStorage.getItem('myTeam')) : [];
        if(checkCharacter(myTeam)){
          myTeam.push(currChar);
          localStorage.setItem('myTeam', JSON.stringify(myTeam));
          alert('Congratulations! You character is added');
          window.location.reload();
        }
        }
        

        useEffect( () => {
          findChar();
          setCurrChar(result);
      }, [])
      
  
    return ( 
      <Card style={{ width: '18rem'}} key={id} bg='dark' >
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Title><span>{name}</span></Card.Title>
        <Card.Text>
          <span>{role}</span>
        </Card.Text>
        <Button variant="primary" onClick={addNewChar}>Add Character</Button>
        </Card.Body>
        <Card.Footer>
          <span>
          </span>
        </Card.Footer>
      </Card>
     );
}
 
export default Results;