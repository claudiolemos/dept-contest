import React from 'react';
import Fade from 'react-reveal/Fade';

import {Article, Image, Label, Title, Button} from './SingleCase.style.js';

import {ReactComponent as ArrowIcon} from './../../../assets/icons/icon-dropdown.svg';

function SingleCase(props) {
    return (
        <Fade bottom distance="50px">
            <Article>
                <Image src={props.case.image} alt={props.case.description}/>
                <Label>{props.case.label}</Label>
                <Title>{props.case.title}</Title>
                <Button>
                    <ArrowIcon />
                    <p>View Case</p>
                </Button>
            </Article>
        </Fade>
    );
  }
  
  export default SingleCase;
  