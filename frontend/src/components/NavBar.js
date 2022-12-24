import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../../static/images/gp.png';
import { useRef } from 'react';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
  
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

  const [expanded, setExpanded] = useState(false);
  
    const navExp= useRef()
    navExp.current = expanded;

    useEffect(() => {
          const expandHam = () => {
          
            console.log(navExp.current)
            let menuBtn = document.querySelector(".navbar-toggler-icon")

            if (navExp.current) {
              menuBtn.classList.add("close")

            }
            else {
              menuBtn.classList.remove("close")
            }
          }

          document.addEventListener('click', expandHam)
          return () => {
            document.removeEventListener('click', expandHam)
          }
      }, [])


  const expHandler = (flag) => {
    setExpanded(flag);
  }

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: navBackground || expanded ? "#13171f" : 'transparent'}}>
      <Container>
        <Navbar.Brand href="/">
          <img height="50" width="75" className="d-inline-block align-top" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => expHandler(!expanded)} >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Link to='/blog'>
              <button className="vvd"><span>Blog</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}