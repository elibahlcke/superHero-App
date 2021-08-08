import React, { useState } from 'react';
import CardFront from './CardFront'
import CardBack from './CardBack'
import ReactCardFlip from 'react-card-flip';


const Cards = ({heroe, display, }) => {
const [flip, isFlipped] = useState(true);
    return ( 
        <ReactCardFlip isFlipped={!flip} flipDirection='horizontal'>
            <CardFront 
                name={heroe[0].name}
                image={heroe[0].image}
                powerstats={heroe[0].powerstats}
                id={heroe[0].id}
                isFlipped={isFlipped}

            />
            <CardBack 
                weight={heroe[0].appearance.weight}
                height={heroe[0].appearance.height}
                aliases={heroe[0].biography.aliases}
                eyeColor={heroe[0].appearance['eye-color']}
                hairColor={heroe[0].appearance['hair-color']}
                image={heroe[0].image}
                work={heroe[0].work}
                name={heroe[0].name}
                isFlipped={isFlipped}
            />

        </ReactCardFlip>
     );
}
 
export default Cards;