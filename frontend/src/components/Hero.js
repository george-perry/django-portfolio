import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap"

export default class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="hero">

                <Container>

                    <Row className="align-items-center">

                        <Col>

                            <h1>George Perry</h1>

                        </Col>

                    </Row>

                </Container>



            </div>
        )
    }
    
}
