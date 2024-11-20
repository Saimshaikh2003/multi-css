import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
        <h1 className="logo">ROLEX WATCHES</h1>
        <nav>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/watches">WATCHES</Link>
            <Link href="/contact">CONTACT</Link>
            <FaShoppingCart  style={{color: 'white' , fontSize : '20px'}}/>
        </nav>
      
    </header>
  )
}

export default Header
