import React from 'react';

import {FilterContainer, Label, DropdownContainer, Placeholder, Select, Option} from './Filter.style.js';

import {ReactComponent as DropdownIcon} from './../../../assets/icons/icon-dropdown.svg';

function Filter(props) {
    return (
        <FilterContainer>
            <Label>Show me</Label>
            <DropdownContainer>
                <Placeholder>{props.categoryValue}</Placeholder>
                <Select onChange={(e) => props.onChange(e.target.value, 'category')}>
                    {
                        props.categories.map((option) => (
                            <Option selected={props.categoryValue === option} key={option}>{option}</Option>
                        ))
                    }
                </Select>
                <DropdownIcon />
            </DropdownContainer>
            <Label>in</Label>
            <DropdownContainer>
                <Placeholder>{props.industryValue}</Placeholder>
                <Select onChange={(e) => props.onChange(e.target.value, 'industry')}>
                    {
                        props.industries.map((option) => (
                            <Option selected={props.industryValue === option} key={option}>{option}</Option>
                        ))
                    }
                </Select>
                <DropdownIcon />
            </DropdownContainer>
        </FilterContainer>
    );
  }
  
  export default Filter;
  