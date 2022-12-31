import React, { Component } from 'react'
import BlogPage from './BlogPage';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar"
import { Hero } from "./Hero"
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
                <div>
                
                    <NavBar></NavBar>

                    <Hero></Hero>

                    <Skills></Skills>

                    <Experience></Experience>

                    <Projects></Projects>

                </div>


        )
    }
    
}
