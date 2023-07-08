import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import { BlogDetailPage } from "./BlogDetailPage"
import Skills from './Skills';
import { BrowserRouter as Router, Routes, Route, Link, Redirect, ScrollRestoration, useLocation } from 'react-router-dom';
import Scroll from "./Scroll";

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            
            <Router>
                <Scroll>
                    <Routes>
                        <Route path='/' element={<HomePage/>}> </Route>
                        <Route path='/blog' element={<BlogPage/>}> </Route>
                        <Route path='/blog/:pk' element={<BlogDetailPage/>}> </Route>
                    </Routes>
                </Scroll>
            </Router>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);