import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        posts: [],
        loaded: false,
        placeholder: "Loading",
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
        .then(posts => {
          this.setState(() => {
            return {
              posts,
            };
          });
        })
      }

  render() {

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

            {this.state.posts.map(post => {
              
              let url = `/blog/${post.project.id}`

              { if (post.project.title === "About Me") {
                return;
              }}

              return (

                <SwiperSlide>
                  <Card className="project-card" style={{height: "max(50vh, 380px)", width: "min(60vw, 700px)", backgroundColor: "rgb(19, 23, 31)"}}>
                    <Card.Img className="project-image" variant="top" src={post.project.link}  style={{height: '25vh', justifyContent: "center", alignContent: "center", objectFit: "cover"}}/>
                    <ListGroup className="list-group-flush" style={{fontSize: "min(3vw, 14px)"}}>
                      <ListGroup.Item>{post.project.skills}</ListGroup.Item>
                    </ListGroup><Card.Body>
                      
                      <a href={post.github} style={{textDecoration: 'none'}}>
                        <Card.Title className="project-card-title" style={{fontSize: "min(3.4vw, 19px)", color: "rgb(174, 145, 66)"}}>{post.project.title}</Card.Title>
                      </a>
                      
                      <Card.Text style={{fontSize: "min(3.1vw, 17px)"}}>
                        {post.project.text}
                      </Card.Text>
                    </Card.Body>
                    
                    <Link to={url} style={{textDecoration: 'none'}} >
                      <Button variant="outlined">&nbsp;See More &nbsp;&nbsp;<ArrowRightCircle/></Button>
                    </Link>

                  {/* <SocialIcon url={post.github} bgColor="#ffff" className=""/> */}

                  </Card> 

                </SwiperSlide>
              );
            })}
          </Swiper>
      </div>
    )
  }
}