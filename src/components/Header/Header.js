import React, {useState, useEffect} from 'react';

import {HeaderComponent, Divider} from './Header.style.js';

import Menu from './Menu.js'

import {ReactComponent as DeptIcon} from './../../assets/icons/icon-dept.svg';

function Header(props) {
    const [clicked, setClicked] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.pageYOffset > 10)
        }
    }, [])

    useEffect(() => {
        document.body.style.overflow = clicked? 'hidden' : 'unset';
    }, [clicked])

    function handleMenuClick(){
        setClicked(!clicked)
    }

    return (
        <>
            <HeaderComponent className={`${scroll && 'scroll'} ${clicked && 'clicked'}`}>
                <div className={`header-container ${scroll && 'scroll'}`}>
                    <a className={`dept ${clicked && 'clicked'} ${scroll && 'scroll'}`} href="/"><DeptIcon alt="Dept Icon"/></a>
                    <ul className="title">
                        <li><p><a href="/">Dept Agency</a></p></li>
                        <li><p>&nbsp;&#8211;&nbsp;Work</p></li>
                    </ul>
                    <ul className={`menu ${clicked && 'clicked'} ${scroll && 'scroll'}`}>
                        <li><button aria-label="Menu button" onClick={handleMenuClick}><p>Menu</p></button></li>
                        <li className="button">
                            <button aria-label="Menu button" onClick={handleMenuClick}>
                                <div className="menu-bar-1"></div>
                                <div className="menu-bar-2"></div>
                            </button>
                        </li>
                    </ul>
                </div>
                <Divider className={`${clicked && 'clicked'}`}/>
            </HeaderComponent>
            <Menu clicked={clicked}/>
        </>
    );
  }
  
  export default Header;
  