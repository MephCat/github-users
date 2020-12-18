import React from 'react';
import {Switch, Route} from "react-router-dom";

import UsersList from "../users-list";
import UserPage from "../pages/user-page";
import Header from "../header";

import './app.css';


const App = () => {

    return (
        <React.Fragment>
            <Header/>
            <div className='container'>
                <Switch>
                    <Route from='/' exact component={UsersList}/>
                    <Route from='/users/:id' component={UserPage}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default App;