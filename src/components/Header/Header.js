import React, {useState} from 'react';

import {HeaderComponent, Divider} from './Header.style.js';

import {ReactComponent as DeptIcon} from './../../assets/icons/icon-dept.svg';

function Header(props) {
    const [clicked, setClicked] = useState(false);

    function handleMenuClick(e){
        e.preventDefault()
        setClicked(!clicked)
    }

    return (
        <HeaderComponent>
            <div className="header-container">
                <a className="dept" href="/"><DeptIcon alt="Dept Icon"/></a>
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
  