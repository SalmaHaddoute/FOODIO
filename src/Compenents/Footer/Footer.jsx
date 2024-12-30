import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <h1>Foodio</h1>
                <p>Chose from a diverse menu featuring a delectable array
                    of dishes carfted with the finest ingredients and culinary
                    expertise. Our mission is to satisfy your craving and
                    elevate your dning experiences , one delecions meal at a time .</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon}  alt="" />
                        <img src={assets.linkedin_icon}  alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUSH</h2>
                <ul>
                    <li>+1-212è456-6789</li>
                    <li>contact@topmato.com</li>
                </ul>
            </div>            
        </div>
        <hr />
            
        <p className="footer-copyright">
                copyright 2025 @ tomato.com - All Right Reserved
            </p>
    </div>
)
}

export default Footer