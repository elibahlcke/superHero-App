import React, {Fragment} from 'react';
import  { useState , useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Login from "./components/Login";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/app.css'



const App = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect( () => {
        if (localStorage.getItem('token')) {
            setIsAuthorized(true);
        } else {
            setIsAuthorized(false);
        }
    }, []);
    
    return ( 
    <Fragment>
        <Header
            title="SuperHero App" 
        />
        <BrowserRouter>
            <Switch>
                {!isAuthorized ? ( <Route path="/">
                <Login />
                    
                </Route> ) : (
                    <Main />
                )}
            </Switch>
        </BrowserRouter>
    </Fragment>
     );
}
 
export default App;
