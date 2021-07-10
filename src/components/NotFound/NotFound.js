import React from 'react';

import {Section, VideoContainer, Video, Source, Button, TitleText} from './NotFound.style.js';

import {ReactComponent as ArrowIcon} from './../../assets/icons/icon-dropdown.svg';

function NotFound(props) {
    return (
        <Section>
            <VideoContainer>
                <Video autoPlay loop muted poster="./images/404.jpg" onContextMenu={(e) => e.preventDefault()}>
                    <Source type="video/mp4" src="./videos/404.mp4"/>
                </Video>
                <TitleText>404</TitleText>
            </VideoContainer>
            <Button><ArrowIcon/><p>Take me home</p></Button>
        </Section>
    );
  }
  
  export default NotFound;
  