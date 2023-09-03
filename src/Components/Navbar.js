import React from 'react'
import './Components.css'
import { FiUser } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const isLogged = localStorage.getItem('recievedToken')
    return (
        <>
            <header>
                <Link to='/' className='shop-logo-link'><h1>Shopify</h1></Link>
                <div id='profile-cart-search'>
                    <div id='search'>
                        <GoSearch className='profile-cart-search-icon ' /><input type='search' placeholder='SEARCH SHOPIFY'></input>
                    </div>
                    <NavLink to='/cart' id='user-cart'><BsCart3 className='profile-cart-search-icon' /><span>MY CART</span></NavLink>
                    {isLogged ? <NavLink to='/userprofile' id='user-profile'><FiUser className='profile-cart-search-icon' /><span>MY PROFILE</span></NavLink> : <NavLink to='/login' activeClassName='active' id='user-profile'><FiUser className='profile-cart-search-icon' /><span>LOGIN</span></NavLink>}
                </div>
            </header>
            <nav className={isMobile ? "nav-links-mobile" : null} onClick={() => { setIsMobile(false) }}>
                {isLogged ? <NavLink to='/userprofile' className='login links mobile-link'><FiUser className='profile-cart-search-icon' />MY PROFILE</NavLink> : <NavLink to='/login' className='login links mobile-link'><FiUser className='profile-cart-search-icon' />LOGIN</NavLink>}
                <NavLink to='/cart' className='my-cart links mobile-link'><BsCart3 className='profile-cart-search-icon' /> MY CART</NavLink>
                <NavLink to='/' activeClassName='active' className='links mobile-link'>HOME</NavLink>
                <div className="dropdown">
                    <NavLink to='/store' activeClassName='active' className='links mobile-link'>STORE</NavLink>
                    <div className="dropdown-content">
                        <div className='dropdown-items'>
                            <div>
                                <h4>Electronics</h4>
                                <Link to='/electronics/mobile' className='dropdown-links'>Mobile</Link>
                                <Link to='/electronics/laptop' className='dropdown-links'>Laptop</Link>
                                <Link to='/electronics/headphones' className='dropdown-links'>Headphones</Link>
                                <Link to='/electronics/watch' className='dropdown-links'>Watch</Link>
                                <Link to='/electronics/tab' className='dropdown-links'>Tab</Link>
                            </div>
                            <div>
                                <h4>Mobile</h4>
                                <Link to='/mobile/mi' className='dropdown-links'>mi</Link>
                                <Link to='/mobile/samsung' className='dropdown-links'>Samsung</Link>
                            </div>
                            <div>
                                <h4>Laptop</h4>
                                <Link to='/laptop/hp' className='dropdown-links'>HP</Link>
                                <Link to='/laptop/dell' className='dropdown-links'>Dell</Link>
                                <Link to='/laptop/lenovo' className='dropdown-links'>Lenovo</Link>
                        
                            </div>
                            <div>
                                <h4>Headphones</h4>
                                <Link to='/headphones/wiredheadhpones' className='dropdown-links'>Wired Headphones</Link>
                                <Link to='/headphones/earphones' className='dropdown-links'>Earphones</Link>
                                <Link to='/headphones/bluetooth' className='dropdown-links'> Wireless On-ear Bluetooth</Link>
                    
                            </div>
                            <div>
                                <h4>Watch</h4>
                                <Link to='/Watch/smartwatch' className='dropdown-links'>Smart Watch</Link>
                                <Link to='/Watch/normalwatch' className='dropdown-links'>Normal Watch</Link>
                            </div>
                            <div>
                                <h4>Tab</h4>
                                <Link to='/Tab/samsung' className='dropdown-links'>Samsung</Link>
                                <Link to='/Tab/lenovo' className='dropdown-links'>Lenovo</Link>
                                <Link to='/Tab/xiaomi' className='dropdown-links'>Xiaomi</Link>
                                <Link to='/Tab/realme' className='dropdown-links'>realme</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to='/electronics' activeClassName='active' className='links mobile-link'>ELECTRONICS</NavLink>
                <NavLink to='/mobile' activeClassName='active' className='links mobile-link'>MOBILE</NavLink>
                <NavLink to='/laptop' activeClassName='active' className='links mobile-link'>LAPTOP</NavLink>
                <NavLink to='/headphone' activeClassName='active' className='links mobile-link'>HEADEPHONES</NavLink>
                <NavLink to='/watch' activeClassName='active' className='links mobile-link'>WATCH</NavLink>
                <NavLink to='/tab' activeClassName='active' className='links mobile-link'>TAB</NavLink>
            </nav>
            <button className='mobile-menu-icon' onClick={() => { setIsMobile(!isMobile) }}>
                {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
        </>
    )
}

export default Navbar