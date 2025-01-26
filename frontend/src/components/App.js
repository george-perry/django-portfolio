import React, { Component } from "react";
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import { BlogDetailPage } from "./BlogDetailPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
