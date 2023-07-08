import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        loaded: false,
        placeholder: "Loading"

    };
  }

  componentDidMount() {
    fetch("api/skills")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {

    let langs = []
    let frame_libs = []
    let others = []

    {this.state.data.map(skill => {
      if (skill.category == "language"){
        langs.push(skill)
      }
      else if (skill.category == "framework" || skill.category == "library") {
        frame_libs.push(skill)
      }
      else {
        others.push(skill)
      }
      })}

    return (
      
      <div className="skills" id="skills">
        <h1 className="skill-title">My Skills</h1>
        <Tabs defaultActiveKey="languages" id="justify-tab-example" className="skill-tabs mb-5" >
          <Tab eventKey="languages" title="Languages" tabClassName="skill-tabs">
            <Row xs="auto" className="skill">
              {langs.map(lang => {
                return (
                  <Col xs={3} sm={2} md={2} lg={3} xl="auto" className="justify-content-center mx-auto">
                    <IconButton>
                      <Tooltip title={lang.name}>
                        <img className="skill-icon img-fluid mx-auto" src={lang.link} ></img>
                      </Tooltip>
                    </IconButton>
                  </Col>
                );
                })}
            </Row>
          </Tab>
          <Tab eventKey="framework_library" title="Frameworks & Libraries" tabClassName="skill-tabs">
            <Row xs="auto" className="skill"> 
              {frame_libs.map(frame_lib => {
                  return (
                    <Col xs={3} sm={2} md={2} lg={3} xl="auto" className="justify-content-center mx-auto">
                      <IconButton>
                        <Tooltip title={frame_lib.name}>
                          <img className="skill-icon img-fluid mx-auto" src={frame_lib.link} ></img>
                        </Tooltip>
                      </IconButton>
                    </Col>
                  );
              })}
            </Row>
          </Tab>
          <Tab eventKey="other" title="Other" tabClassName="skill-tabs">
            <Row xs="auto" className="skill">
              {others.map(other => {
                  return (
                    <Col xs={3} sm={2} md={2} lg={3} xl="auto" className="justify-content-center mx-auto">
                      <IconButton>
                          <Tooltip title={other.name}>
                            <img className="skill-icon img-fluid mx-auto" src={other.link} ></img>
                          </Tooltip>
                        </IconButton>
                    </Col>
                  );
              })}
            </Row>
          </Tab>
        </Tabs>
      </div>
    )
  }
}