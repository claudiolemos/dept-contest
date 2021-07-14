import React from 'react';

import {Article, Image, InfoContainer, Label, Title, Button} from './SingleCase.style.js';

import {ReactComponent as ArrowIcon} from './../../../assets/icons/icon-dropdown.svg';

function SingleCase(props) {
    return (
        <Article className={!props.grid && 'list'}>
            <div>
                <Image src={props.case.image} alt={props.case.description}/>
                <InfoContainer>
                    <Label>{props.case.label}</Label>
                    <Title>{props.case.title}</Title>
                    <Button>
                        <ArrowIcon />
                        <p>View Case</p>
                    </Button>
                </InfoContainer>
            </div>
        </Article>
    );
  }
  
  export default SingleCase;
  