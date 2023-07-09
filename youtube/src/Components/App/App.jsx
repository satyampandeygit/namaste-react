import React from 'react';
import { Header } from '../Header';
import '@fortawesome/fontawesome-free/css/solid.css';
import { HomePage } from '../Body';

export const App = () =>{
    return (
        <React.Fragment>
            <Header/>
            <HomePage/>
        </React.Fragment>
    )
}