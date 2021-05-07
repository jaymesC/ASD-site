import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import "normalize.css"
import { FaLock } from 'react-icons/fa';
import Button from '../atoms/NavButton'


export default function Navbar() {
  const Navbar = styled.nav`
  display: flex;
  justify-content:center;
  margin: 50px auto;
  position: sticky;
  `
  const Links = styled.div`
  display: inline-block;
  `
  const Navlinks = styled.a`
  display: inline-block;
  margin-left: 50px;
  margin-top: 20px;
  border-bottom: 3px solid transparent;
  font-size: 18px;
  cursor:pointer;
  font-family:Tahoma;
  color:rgb(128, 122, 122);
  
  `


  return (
    
      <Navbar>
      <img src="logo.JPG" alt=""/>
      <Links>
        <Navlinks to="/">Benefits</Navlinks>
        <Navlinks to="/about">Goals</Navlinks>
        <Navlinks to="/projects"> Membership</Navlinks>
        <Navlinks to="/projects"> Blog</Navlinks>
        <Navlinks to="/projects"> Team</Navlinks>
        <Navlinks to="/projects"> <Button><FaLock /> MEMBERS LOGIN</Button></Navlinks>
      </Links>
    </Navbar>
  )
}
