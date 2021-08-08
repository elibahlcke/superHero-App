import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { 
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardHeader,
    } from "reactstrap";
import { Row, Col, CardGroup } from 'react-bootstrap';
import Results from './Results';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import "../style/search.css";

const validate = values => {
    const errors = {};
    //We need to input something before submitting
    if (!values.search) errors.search = "Required";
    return errors;
}


const Search = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState([]);
    let results = [];

    function sendData() {
        setIsLoading(true)
        let name = formik.values.search;
        axios.get('https://superheroapi.com/api/10158491823203845/search/' + name, ).catch(function (error) {
    alert(error);
    }).then(function (response) {
        console.log(response);
        if(response['data']['response'] === 'success'){
        results.push(response['data']['results']);
        results = [...results[0]];
        console.log(results);
        setIsLoading(false);
        setResult(results);

        } else if(response['data']['response'] === 'error'){
            alert('There is no character matching your search');
        }
    })
    }
    const formik = useFormik({
        initialValues:{
            search: "",
        },
        validate,
        onSubmit: values => {
            sendData();

        },
    });
    return ( 
        <>
        <Container className="p-5">       
            <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                    <Label htmlFor="search">Let's Search some Super Hero(or villain)</Label>
                    <Input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="Start searching..." 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.search} 
                    />
                    {formik.errors.search && formik.touched.search ? (<div>{formik.errors.search}</div>) : null }
                </FormGroup>
                <Button type="submit">Search</Button>
            </Form>
            
            {!isLoading ? (
            <div className='columns'>
            <CardGroup style={{ justifyContent: 'center' }}>
            {result.map((character, index) => {
              return (
                <div className='column is-3' key={index} style={{ margin: '10px'}}>
                  <Results
                    name={character.name}
                    image={character.image.url}
                    id={character.id}
                    biography={character.biography}
                  />
                </div>
              );
            })}
            </CardGroup>
          </div>
        ) : (
            <Loader 
        type="Rings"
        color="#FFFFFF"
        height={100}
        width={100}
        timeout={3000} />
        )}
            </Container>
            </>
        );
        
    }


export default Search;