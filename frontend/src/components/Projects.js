import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        projects_list: [],
        loaded: false,
        placeholder: "Loading",
    };
  }

  // componentDidMount() {
  //   fetch("api/posts")
  //     .then(response => {
  //       if (response.status > 400) {
  //         return this.setState(() => {
  //           return { placeholder: "Something went wrong!" };
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState(() => {
  //         return {
  //           data,
  //           loaded: true
  //         };
  //       });
  //     })
  //   }

    componentDidMount() {
      fetch("api/projects")
        .then(response => {
          if (response.status > 400) {
            return this.setState(() => {
              return { placeholder: "Something went wrong!" };
            });
          }
          return response.json();
        })
        .then(projects_list => {
          this.setState(() => {
            return {
              projects_list,
            };
          });
        })
      }

  // // .then(data => {
  //   let r = (res) => {
  //     {this.state.data.map(post => {
  //       console.log("LOOP", post.project)

  //         fetch(`api/projects/${post.project}`)
  //           .then(response => {
  //             if (response.status > 400) {
  //               return this.setState(() => {
  //                 return { placeholder: "Something went wrong!" };
  //               });
  //             }
  //             // console.log(response.json(), "OKOKOKKOk")
  //             res.push(response.json());
  //           })
            
  //     })}
  //     console.log("FINAL", res);
  //     return res;
  //   }
  //     // return res;
  //   let res = []
  //   let result = r(res);
  //   // console.log(result, "OK")
  //   // .then(result => {
  //     this.setState({
  //       projects_list: result
  //     })
  //   // })
  // // })
      
      

        

      //   fetch("api/posts")
      //     .then(response => {
      //       if (response.status > 400) {
      //         return this.setState(() => {
      //           return { placeholder: "Something went wrong!" };
      //         });
      //       }
      //       return response.json();
      // })
      // })
  // }

  // getProject(projectID) {
  //   componentDidMount() {
  //     url = `api/post/${projectID}`
  //     fetch(url)
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
  // }

  render() {
    console.log("FULL", this.state.data)
    {this.state.data.map(post => {
      console.log("OUTER", post.project)

    })}


    console.log("YE", this.state.projects_list)


    return (

      <div class="projects" id="projects">


          <h1 className="project-title">My Projects</h1>


          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
    
          >

            {this.state.projects_list.map(project => {
              
              let url = `/blog/${project.id}`

              return (

                <SwiperSlide>
                              
                  <Card className="project-card" style={{height: "max(57vh, 370px)", backgroundColor: "rgb(19, 23, 31)"}}>
                    <Card.Img variant="top" src="../../static/images/movies.png" />
                    <Card.Body>
                      <Card.Title className="project-card-title" style={{fontSize: "min(3.5vw, 20px)"}}>{project.title}</Card.Title>
                      <Card.Text style={{fontSize: "min(3.2vw, 18px)"}}>
                        {project.text}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{fontSize: "min(3.1vw, 15px)"}}>
                      <ListGroup.Item>{project.skills}</ListGroup.Item>
                    </ListGroup>
                    <Link to={url} style={{textDecoration: 'none'}} >
                      <Button variant="outlined">&nbsp;Read More &nbsp;&nbsp;<ArrowRightCircle/></Button>
                    </Link>
                  </Card> 

                </SwiperSlide>
              );
            })}
          </Swiper>
      </div>
      
    )
  }
}