import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import NavList from "./NavList"


const Header = () => {
  const [mobile, setMobile] = React.useState(false);

  React.useEffect( () => {
    function scrolling() {
      const menu = document.querySelector('#menu')
      const header = document.querySelector('#Head')
      menu.classList.toggle('scrolling',window.scrollY > 50)
      header.classList.toggle('scrolling',window.scrollY > 50)
    }
    window.addEventListener('scroll', scrolling)
  },[])

  //Se mobile == true -> significa que o menu está aberto (X)
  //Se mobile == false -> significa que o menu está fechado (Hamburger)

  return (
    <>
      <header className="header" id="Head">
        <nav className="navbar container dflex" id="menu">
        <Logo logo={logo}/>
        <MobileMenu mobile={mobile} setMobile={setMobile} />
        <NavList mobile={mobile} setMobile={setMobile} />
        </nav>
      </header>
    </>
  )
}

export default Header
