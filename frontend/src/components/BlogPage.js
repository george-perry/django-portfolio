import { NavBar } from "./NavBar"
import React, { Component } from 'react'
import '../assets/tailwind.css'

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

  render() {
    return (
      <div className="bg-[#0C2340]">
        <NavBar></NavBar>
        <h1 className="justify-center content-center text-center pt-28	">Welcome to my blog!</h1>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {this.state.data.map(post => {
              let url = `/blog/${post.id}`
              {
                if (post.title !== "About Me") {
                  return;
                }
              }
              return (
                <div key={post.project.id} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                  <img
                    src={post.project.link}
                    className="object-cover w-full h-64"
                    alt=""
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <span className="text-gray-600">{post.date}</span>
                    </p>
                    <a
                      href={url}
                      aria-label="Category"
                      title={post.title}
                      className="inline-block mb-3 no-underline	 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      {post.title}
                    </a>
                    <p className="mb-2 text-gray-700">
                      {post.project.text}
                    </p>
                    <a
                      href={url}
                      aria-label=""
                      className="inline-flex no-underline items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      Read more
                    </a>
                    &nbsp; &nbsp;
                    {post.active && (
                      <a
                        href={post.active}
                        aria-label=""
                        className="inline-flex no-underline items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                      >
                        Visit Site
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
