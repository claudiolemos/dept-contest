import React from 'react';

import {MenuContainer} from './Menu.style.js';

function Menu(props) {
    return (
        <MenuContainer className={`${props.clicked && 'clicked'}`}>
            
        </MenuContainer>
    );
  }
  
  export default Menu;
  