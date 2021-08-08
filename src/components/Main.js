import React, { useState, useEffect } from 'react';
import Team from './Team';
import Search from './Search';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/main.css'

const Main = () => {
    const [isTeam, setIsTeam] = useState(false);
    useEffect(() => {
        let team = localStorage.getItem('myTeam') ? true : false;
        setIsTeam(team);
    })
    return ( 
        <Container  id="container-class" style={{ textAlign: 'center', justifyContent: 'center'}}>
                {isTeam ? (<Team />) : (<Container fluid>
                <div>Your team is empty, <a href="/">Refresh team</a></div>
                </Container>)}
                <Search />
               
                
       
           
        
        </Container> 
        );
}
 
export default Main;