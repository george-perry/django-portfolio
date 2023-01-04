import { useState, useEffect, useLayoutEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation, ScrollRestoration  } from 'react-router-dom';
import logo from '../../static/images/gp.png';
import { useRef } from 'react';

export const NavBar = () => {

  const location = useLocation();
  console.log(location)

  const clamp = (value) => Math.max(0, value);

  const isBetween = (value, floor, ceil) =>
    value >= floor && value <= ceil;

  const useScrollspy = (ids, offset = 0) => {
    const [activeId, setActiveId] = useState("");

    useLayoutEffect(() => {
      const listener = () => {
        const scroll = window.pageYOffset;

        const position = ids
          .map((id) => {
            const element = document.getElementById(id);

            if (!element) return { id, top: -1, bottom: -1 };

            const rect = element.getBoundingClientRect();
            const top = clamp(rect.top + scroll - offset);
            const bottom = clamp(rect.bottom + scroll - offset);

            return { id, top, bottom };
          })
          .find(({ top, bottom }) => isBetween(scroll, top, bottom));

        setActiveId(position?.id);
      };

      listener();

      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);

      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }, [ids, offset]);

    return activeId;
  };

  const ids = ["home", "skills", "experience", "projects"];
  const activeId = useScrollspy(ids, 54); // 54 is navigation height

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

          {!location.pathname.startsWith('/blog') && (
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="#home" className={activeId == 'home' ? 'active navbar-link' : 'navbar-link'} >Home</Nav.Link>
              <Nav.Link href="#skills" className={activeId == 'skills'? 'active navbar-link' : 'navbar-link'} >Skills</Nav.Link>
              <Nav.Link href="#experience" className={activeId == 'experience' ? 'active navbar-link' : 'navbar-link'} >Experience</Nav.Link>
              <Nav.Link href="#projects" className={activeId == 'projects' ? 'active navbar-link' : 'navbar-link'} >Projects</Nav.Link>
              {/* <Nav.Link href="#education" className={activeId == 'education' ? 'active navbar-link' : 'navbar-link'} >Education</Nav.Link> */}
          
            </Nav>
          )}
{/* 
          <span className="navbar-text">
            <Link to='/blog'> */}

          {!location.pathname.startsWith('/blog') && 
            <span className="navbar-text">
              <Link to='/blog'>
                <button className="vvd"><span>Blog</span></button>
              </Link>
            </span>
          }            

          {location.pathname.startsWith('/blog') && !expanded && 
            <span className="navbar-text" style={{alignItems: "right", paddingLeft:"75%"}}>
              <Link to='/'>
                <button ><span>Return Home</span></button>
              </Link>
            </span>
          }

          {location.pathname.startsWith('/blog') && expanded && 
            <span className="navbar-text">
              <Link to='/'>
                <button ><span>Return Home</span></button>
              </Link>
            </span>
          }
             
              {/* <button className="vvd"><span>Blog</span></button> */}
            
            {/* </Link>
          </span> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
