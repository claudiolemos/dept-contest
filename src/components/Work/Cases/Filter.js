import React from 'react';

import {FilterContainer, Label, DropdownContainer, Placeholder, Select, Option} from './Filter.style.js';

import {ReactComponent as DropdownIcon} from './../../../assets/icons/icon-dropdown.svg';

function Filter(props) {
    return (
        <FilterContainer>
            <Label>Show me</Label>
            <DropdownContainer>
                <Placeholder>{props.categoryValue}</Placeholder>
                <Select value={props.categoryValue} onChange={(e) => props.onChange(e.target.value, 'category')}>
                    {
                        props.categories.map((option) => (
                            <Option key={option}>{option}</Option>
                        ))
                    }
                </Select>
                <DropdownIcon />
            </DropdownContainer>
            <Label>in</Label>
            <DropdownContainer>
                <Placeholder>{props.industryValue}</Placeholder>
                <Select value={props.industryValue} onChange={(e) => props.onChange(e.target.value, 'industry')}>
                    {
                        props.industries.map((option) => (
                            <Option key={option}>{option}</Option>
                        ))
                    }
                </Select>
                <DropdownIcon />
            </DropdownContainer>
            <Label>as</Label>
            <DropdownContainer>
                <Placeholder>{props.grid? 'grid' : 'list'}</Placeholder>
                <Select value={props.grid? 'grid' : 'list'} onChange={(e) => props.onGridChange()}>
                    <Option key="grid">grid</Option>
                    <Option key="list">list</Option>
                </Select>
                <DropdownIcon />
            </DropdownContainer>
        </FilterContainer>
    );
  }
  
  export default Filter;
  