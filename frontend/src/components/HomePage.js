import React, { Component } from 'react'
import BlogPage from './BlogPage';
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
                        <p>Thisis the home page,,..</p>
                    </Route>

                    <Route path='/blog' component={BlogPage}>
                    </Route>


                </Switch>
            </Router>
        )
    }
    
}
