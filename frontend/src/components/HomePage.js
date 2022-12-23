import React, { Component } from 'react'
import BlogPage from './BlogPage';
import Skills from './Skills';
import Hero from './Hero';
// import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./NavBar"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Router>
                <Switch>

                    <Route exact path="/">

                        <div>
                        
                        
                            <NavBar></NavBar>

                            <Hero></Hero>

                            <Skills></Skills>

                            <div class="default">

                                Lorum Ipsum Dolres Sextus Puer Molestus Si Papi
                                Munano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue Keblex Munano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue KeblexMunano Si CHolo Cupabroa Deloa Tissue Keblex  Lorum Ipsum Dolres Sextus Puer Molestus Si Papi Munano Si CHolo Cupabroa Deloa Tissue Keblex
                            
                            </div>

                        </div>

                    </Route>

                    <Route path='/blog' component={BlogPage}>
                    </Route>


                </Switch>
            </Router>
        )
    }
    
}
