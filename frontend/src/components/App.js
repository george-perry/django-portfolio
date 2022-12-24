import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import Skills from './Skills';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (

            <Router>
                <Routes>
                    

                    <Route path='/' element={<HomePage/>}> </Route>
                    <Route path='/blog' element={<BlogPage/>}> </Route>


                </Routes>
            </Router>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);