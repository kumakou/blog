import React, { useState } from "react"
import Logo from "./Logo"
import MenuToggle from "./MenuToggle"
import MenuLinks from "./MenuLinks"
import NavBarContainer from "./NavBarContainer"

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <NavBarContainer>
        <Logo w="100px" />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </div>
  )
}

export default Navbar
