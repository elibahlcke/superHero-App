import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card'
import Totals from './Totals';
import { Container, CardGroup } from 'react-bootstrap'


const Team = () => {
    const [myTeam, setMyTeam] = useState([]);
    const [showTeam, setShowTeam] = useState(false);
   useEffect(() => {
       function getTeam() {
           const team = JSON.parse(localStorage.getItem('myTeam')) || [];
           setMyTeam(team);
           setShowTeam(true);
       }
       getTeam();
   }, [showTeam])

    return ( 
        <Container style={{ justifyContent: 'center'}}>
        <div className='columns'>
            <Totals team={myTeam} />
        </div>
        <div className='columns'>
            <CardGroup style={{ justifyContent: 'center' }}>
            {showTeam ? (myTeam.map((item, index) => {
                    
return (
                <div className='column is-3' key={index}  style={{ margin: '10px'}}>
                  <Card heroe={item} id={index} />
                </div>
              );
            })) : null}
                            </CardGroup>
                    </div>
        
       
      

        </Container>
     );


}
 
export default Team;