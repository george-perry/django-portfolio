import React, { Component } from 'react'
import { useParams } from "react-router-dom";  

export const BlogDetailPage = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //         loaded: false,
    //         placeholder: "Loading"
    
    //     };
    //     // this.pk = this.props.match.params.pk;
    // }
    
    const { pk } = useParams();


    // componentDidMount() {
    //     fetch("api/posts")
    //       .then(response => {
    //         if (response.status > 400) {
    //           return this.setState(() => {
    //             return { placeholder: "Something went wrong!" };
    //           });
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         this.setState(() => {
    //           return {
    //             data,
    //             loaded: true
    //           };
    //         });
    //       });
    //   }

    return (
        <div>
          OK
          {pk}

        </div>
    )
}
    
