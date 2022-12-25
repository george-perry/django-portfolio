import React, { Component } from 'react'

export default class Experience extends Component {
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
    return (
      <div class="skills" id="experience">

        <ul>
            {this.state.data.map(skill => {
            return (
                <li key={skill.id}>
                {skill.name}
                </li>
            );
            })}
      </ul>

      </div>
    )
  }
}


// getSkills() {
    //     fetch("http://127.0.0.1:8000/api/home")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         this.setState({
    //           name: data.name,
    //         });
    //       });
    //   }
    
    //   componentDidMount() {
    //     this.getSkills();
    //   }