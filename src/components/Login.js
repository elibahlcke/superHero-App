import React from 'react';
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
import "../style/login.css";


const validate = values => {
    const errors = {};
    //We need a valid email
    if (!values.email) errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        errors.email = "Invalid email address";
    //We need a password
    if (!values.password) errors.password = "Required";
    return errors;
}

function Login() {
    async function sendData() {
        const config = {
            url: 'http://challenge-react.alkemy.org/',
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({email: formik.values.email, password: formik.values.password}),
        };
        const response = await axios(config).catch((err) => alert(err));
        if(response.data.error){
            alert(response.data.error);
        } else {
            localStorage.setItem('token', JSON.stringify(response.data));
            window.location.reload();
        }
    }
    const formik = useFormik({
        initialValues:{
            email: "",
            password: "",
        },
        validate,
        onSubmit: values => {
            sendData();

        },
    });
    return ( 
        <Container className="p-5">
            <Form onSubmit={formik.handleSubmit}>
                <h1>Please Log In</h1>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="juan@hotmail.com" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} 
                    />
                    {formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : null }
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="password" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.password}    
                    />
                    {formik.errors.password && formik.touched.password ? (<div>{formik.errors.password}</div>) : null }
                </FormGroup>
                <Button type="submit">Send</Button>
            </Form>
    </Container>
);
}

export default Login;