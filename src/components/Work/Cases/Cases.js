import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import {Section} from './Cases.style.js';

import Filter from './Filter.js'
import SingleCase from './SingleCase.js'
import Paginate from './Paginate.js'

import Categories from './../../../assets/data/categories.json'
import Industries from './../../../assets/data/industries.json'

function Cases(props) {
    const [category, setCategory] = useState(Categories[0])
    const [industry, setIndustry] = useState(Industries[0])
    const [cases, setCases] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [pageRange, setPageRange] = useState(1)
    const casesPerPage = 4

    useEffect(() => {
        axios
        .get('./data/cases.json')
        .then(response => {
            const filteredCases = filterCases(response.data.reverse())
            setCases(filteredCases.slice(pageNumber*casesPerPage, pageNumber*casesPerPage+casesPerPage))
            setPageCount(Math.ceil(filteredCases.length / casesPerPage))
        })
        .catch(error => {
            console.log(error)
        })
    }, [category, industry, pageNumber, casesPerPage])

    function filterCases(cases){
        return cases
            .filter(value => category !== Categories[0]? value.categories.includes(category) : true)
            .filter(value => industry !== Industries[0]? value.industries.includes(industry) : true)
    }

    function handleFilterChange(value, type) {
        if(type === 'category')
            setCategory(value)
        else if(type === 'industry')
            setIndustry(value)

        setPageNumber(0)
    }

    function handlePageChange({selected}){
        setPageNumber(selected)
        setPageRange(selected < 3 ? selected + 1 : Math.abs(selected - pageCount) < 3 ? Math.abs(selected - pageCount) + 1 : 2)
      }
    
    return (
        <>
        <Filter onChange={handleFilterChange} categories={Categories} categoryValue={category} industries={Industries} industryValue={industry}/>
        <Section>
            {
                cases.map((singleCase) => (
                    <SingleCase key={uuid()} case={singleCase}/>
                ))
            }
        </Section>
        <Paginate onChange={handlePageChange} pageNumber={pageNumber} pageCount={pageCount} pageRange={pageRange}/>
        </>
    );
  }
  
  export default Cases;
  