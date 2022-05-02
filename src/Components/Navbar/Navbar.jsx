import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link }from 'react-scroll'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Jack</div>
            <Toggle/>
        </div>
        <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                   <li>Home</li>
                </Link>
                <Link to="Services" spy={true} smooth={true}>
                   <li>Services</li>
               </Link>
               <Link to="Experience" spy={true} smooth={true}>
                   <li>Experience</li>
               </Link>
               <Link to="Portfolio" spy={true} smooth={true}>
                   <li>Portfolio</li>
               </Link>
               <Link to="Testimonials" spy={true} smooth={true}>
                   <li>Testimonials</li>
               </Link>
            </ul>
        </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

//activeClass - The class applied when element is reached.
//to - The target to scroll to.
// spy - To make Link selected when scroll is at its target’s position.
// smooth - To animate the scrolling.
// offset - To scroll additional px (like padding).
// duration - The time of the scroll animation. This can be a number or a function.
// The "to" property is the most important part as it tells the component which element to scroll to. In this case, this will be each of your <Section>s.
// With the offset property, you can define an additional amount of scrolling to perform to get to each <Section>.


export default Navbar
