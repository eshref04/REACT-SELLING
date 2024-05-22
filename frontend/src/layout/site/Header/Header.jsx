import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex-column d-flex '>
        <div className="header__start p-3">
        <div className="container d-flex justify-content-between">
        <div className='header__start__icons d-flex gap-1'>
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
            <div><i class="fa-brands fa-linkedin-in"></i></div>
        </div>

        <div className='header__start__links d-flex gap-4'>
        <Link className='d-flex gap-2 align-items-center'><i class="fa-solid fa-phone"></i><span> (+1) 234 5678 9101</span></Link>
        <Link className='d-flex gap-2 align-items-center'><i class="fa-solid fa-envelope"></i><span> shop@yourdomain.com</span></Link>
        </div>
        </div>
        </div>

        <div className="header__end  mb-3">
            <div className="container d-flex justify-content-between align-items-center">
                <Link className='header__end__logo'>Selling <span className='header__end__logo__span'>.</span></Link>

                <ul className='header__end__menu d-flex gap-5 align-items-center mt-5'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/basket">Basket</Link></li>
                </ul>
            </div>
        </div>
        
        
        </header>
  )
}

export default Header