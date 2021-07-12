import React, {useState} from 'react';

import {MenuContainer} from './Menu.style.js';

import Nav from './../../assets/data/nav.json'

import {ReactComponent as ArrowIcon} from './../../assets/icons/icon-dropdown.svg';

function Menu(props) {
    const [hover, setHover] = useState()

    function handleOver(e) {
        setHover(e.target.textContent)
    }

    function handleOut(e) {
        setHover()
    }

    return (
        <MenuContainer className={`${props.clicked && 'clicked'}`}>
            <div>
                <ul className="nav">
                    {
                        Nav.map((menu) => (
                            <>
                                <li><a className={(hover && hover === menu && 'hover') || (hover && 'not-hover')} onMouseEnter={handleOver} onMouseLeave={handleOut} href={`/${menu}`}><ArrowIcon /><p>{menu}</p></a></li>
                            </>
                        ))
                    }
                </ul>
                <div>
                    <ul className="language">
                        <li><a href="#global"><ArrowIcon />Global</a></li>
                        <li><a href="#nl"><ArrowIcon />Nederland</a></li>
                        <li><a href="#us"><ArrowIcon />United States</a></li>
                        <li><a href="#ie"><ArrowIcon />Ireland</a></li>
                        <li><a href="#uk"><ArrowIcon />United Kingdom</a></li>
                        <li><a href="#de"><ArrowIcon />Deutschland</a></li>
                        <li><a href="#ch"><ArrowIcon />Schweiz</a></li>
                    </ul>
                    <ul className="social">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/DeptAgency/"><ArrowIcon />Facebook</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/DeptAgency/"><ArrowIcon />Twitter</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/DeptAgency/"><ArrowIcon />Instagram</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/DeptAgency/"><ArrowIcon />Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </MenuContainer>
    );
  }
  
  export default Menu;
  