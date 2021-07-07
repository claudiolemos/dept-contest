import React from 'react';

import {FooterComponent, Divider} from './Footer.style.js';

import {ReactComponent as DeptIcon} from './../../assets/icons/icon-dept.svg';
import {ReactComponent as FacebookIcon} from './../../assets/icons/icon-fb.svg';
import {ReactComponent as TwitterIcon} from './../../assets/icons/icon-twitter.svg';
import {ReactComponent as InstagramIcon} from './../../assets/icons/icon-instagram.svg';
import {ReactComponent as TopIcon} from './../../assets/icons/icon-scroll-to-top.svg';

function Footer(props) {

    function handleTopClick(){
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <FooterComponent>
            <div className="footer-container">
                <div className="footer-top">
                    <a className="dept" href="/"><DeptIcon alt="Dept Icon"/></a>
                    <ul className="nav">
                        <li><a href="/work">Work</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/stories">Stories</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <ul className="social">
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/DeptAgency/"><FacebookIcon alt="Facebook Icon"/></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/DeptAgency/"><TwitterIcon alt="Twitter Icon"/></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/DeptAgency/"><InstagramIcon alt="Instagram Icon"/></a></li>
                    </ul>
                </div>
                <Divider />
                <div className="footer-bottom">
                    <ul className="info">
                        <li><p>Chamber of Commerce: 63464101</p></li>
                        <li><p>VAT: NL 8552.47.502.B01</p></li>
                        <li><p><a href="/terms">Terms and conditions</a></p></li>
                    </ul>
                    <ul className="copyright">
                        <li><p>&copy; {(new Date().getFullYear())} Dept</p></li>
                    </ul>
                </div>
                <button className="top" onClick={handleTopClick}>
                    <TopIcon />
                    <p>Top</p>
                </button>
            </div>
        </FooterComponent>
    );
  }
  
  export default Footer;
  