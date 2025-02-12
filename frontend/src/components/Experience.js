import React, { Component } from 'react'
import { Chrono } from "react-chrono";
import { Container } from "react-bootstrap";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
      matches: window.matchMedia("(min-width: 768px)").matches,
      isMobile: window.width < 720,
      WindowSize: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleResize(WindowSize, event) {
    this.setState({ WindowSize: window.innerWidth })
  }

  componentDidMount() {
    fetch("api/experience")
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
    return (
      <div className={this.state.WindowSize > 720 ? 'experience' : 'experience'} id="experience">
        <Container>
          <h1 className="experience-title">My Experience</h1>
          <Chrono className="experience-timeline" allowDynamicUpdate={"true"} items={this.state.data} mode={this.state.WindowSize > 720 ? 'HORIZONTAL' : 'VERTICAL_ALTERNATING'} itemWidth={"250"} cardHeight={100} showAllCardsHorizontal
            theme={{
              primary: '#ae9142',
              secondary: '#13171f',
              cardBgColor: '#13171f',
              cardForeColor: 'white',
              titleColor: 'white',
              titleColorActive: 'white',
            }}
          />
        </Container>
      </div>
    )
  }
}
