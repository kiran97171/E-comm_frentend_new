import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa6'
import {GrInstagram } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer-down'>
                <div>
                    <h5>SHOP BY CATEGORY</h5>
                    <Link to='/electronics' className='footer-links'>Electronics</Link>
                    <Link to='/mobile' className='footer-links'>Mobile</Link>
                    <Link to='/laptop' className='footer-links'>Laptop</Link>
                    <Link to='/headphone' className='footer-links'>Headphones</Link>
                    <Link to='/watch' className='footer-links'>Watch</Link>

                </div>
                <div>
                    <h5>ABOUT US</h5>
                    <Link to='/' className='footer-links'>About</Link>
                    <Link to='/' className='footer-links'>Terms and Conditions</Link>
                    <Link to='/' className='footer-links'>Privacy Policy</Link>
                    
                </div>
                <div>
                    <h5>HELP</h5>
                    <Link to='/userprofile' className='footer-links'>My Account</Link>
                    <Link to='/' className='footer-links'>Delivery</Link>
                    <Link to='/' className='footer-links'>Track an Order</Link>
                    <Link to='/' className='footer-links'>Returns</Link>
                </div>
                <div>
                        <h5>Follow us</h5>
                        <p>Connect with us on social media <br /> and stay up-to-date on the <br />latest trends and deals</p>
                        <BsFacebook id='facebook-logo' />
                        <FaTwitter id='twitter-logo' />
                        <GrInstagram id='instagram-logo'/>
                    </div>
            </div>
            
        </>
    )
}

export default Footer