import React from 'react';
import { Image } from 'react-bootstrap';
import superhero from '../images/banner.jpg';
import Menu from './Menu';
import '../style/header.css'
import { Container } from 'reactstrap';



const Header  = ({title}) => {
    return ( 
        <Container id="head" fluid>
        <header>
            <Menu />
            <div className="container">
                <div className="content" bg="primary">
                    <Image src={superhero} fluid />
                    <div id="text">
                    <h1 className="title" style={{ fontSize: '60px'}}>{title}</h1>
                    <a href="https://www.freepik.es/fotos-vectores-gratis/fondo" id="tributte">Vector de Fondo creado por macrovector_official - www.freepik.es</a>
                </div>
                </div>
            </div>
        </header>
        </Container>
     );
}
 
export default Header ;