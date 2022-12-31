import React, { Component } from 'react'

export default class BlogPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
    
        };
    }
    
    componentDidMount() {
        fetch("api/posts")
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

    render(){
        return (
            <div>

                {this.state.data.map(post => {
                    return (
                        <div>
                            {post.title}
                        </div>
                    );
                })}

            </div>
        )
    }
    
}
