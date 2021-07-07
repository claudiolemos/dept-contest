import React, {useState, useEffect} from 'react';

import {HeaderComponent, Divider} from './Header.style.js';

import {ReactComponent as DeptIcon} from './../../assets/icons/icon-dept.svg';

function Header(props) {
    const [clicked, setClicked] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.pageYOffset > 10? true : false)
        }
    }, [])

    function handleMenuClick(){
        setClicked(!clicked)
    }

    return (
        <HeaderComponent className={`${scroll? 'scroll' : ''}`}>
            <div className="header-container">
                <a className="dept" href="/"><DeptIcon alt="Dept Icon"/></a>
                <ul className="title">
                    <li><p><a href="/">Dept Agency</a></p></li>
                    <li><p>&nbsp;&#8211;&nbsp;Work</p></li>
                </ul>
                <ul className={`menu ${clicked? 'clicked' : ''}`}>
                    <li><button onClick={handleMenuClick}><p>Menu</p></button></li>
                    <li>
                        <button onClick={handleMenuClick}>
                            <div className="menu-bar-1"></div>
                            <div className="menu-bar-2"></div>
                        </button>
                    </li>
                </ul>
            </div>
            <Divider />
        </HeaderComponent>
    );
  }
  
  export default Header;
  