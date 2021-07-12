import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

import {CasesContainer, Section, Message} from './Cases.style.js';

import Filter from './Filter.js'
import SingleCase from './SingleCase.js'
import Paginate from './Paginate.js'

import Categories from './../../../assets/data/categories.json'
import Industries from './../../../assets/data/industries.json'

const categories = Categories.map((category) => category.split(' ').join().split(',')[0])
const industries = Industries.map((industry) => industry.split(' ').join().split(',')[0])

function Cases(props) {
    const [category, setCategory] = useState(Categories[0])
    const [industry, setIndustry] = useState(Industries[0])
    const [cases, setCases] = useState([])
    const [paginate, setPaginate] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [pageRange, setPageRange] = useState(1)
    const casesPerPage = 4
    const query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        setCategory(Categories[categories.indexOf(query.get('case_category'))] || Categories[0])
        setIndustry(Industries[industries.indexOf(query.get('case_industry'))] || Industries[0])
    }, [])

    useEffect(() => {
        axios
        .get('./data/cases.json')
        .then(response => {
            const filteredCases = response.data
                .sort((a, b) => new Date(b.date) - new Date(a.date)  || b.id - a.id)
                .filter(value => category === Categories[0] || value.categories.includes(category))
                .filter(value => industry === Industries[0] || value.industries.includes(industry))

            const count = Math.ceil(filteredCases.length / casesPerPage)
            const paged = Number.parseInt(query.get('paged'))

            console.log(paged)

            setPageNumber((paged && paged > 0 && paged <= count && paged - 1) || pageNumber)
            setPaginate(filteredCases.length > casesPerPage)
            setCases(filteredCases.slice(pageNumber*casesPerPage, pageNumber*casesPerPage+casesPerPage))
            setPageCount(count)
        })
        .catch(error => {
            console.log(error)
        })
    }, [category, industry, pageNumber, casesPerPage])

    function handleFilterChange(value, type) {
        if(type === 'category')
            setCategory(value)
        else if(type === 'industry')
            setIndustry(value)

        setPageNumber(0)
        window.history.replaceState(null, document.title, `/work?paged=1&case_category=${categories[Categories.indexOf(type === 'category'? value : category)]}&case_industry=${industries[Industries.indexOf(type === 'industry'? value : industry)]}`)
    }

    function handlePageChange({selected}){
        setPageNumber(selected)
        setPageRange(selected < 3 ? selected + 1 : Math.abs(selected - pageCount) < 3 ? Math.abs(selected - pageCount) + 1 : 2)
        window.history.replaceState(null, 'document.title', `/work?paged=${selected+1}&case_category=${categories[Categories.indexOf(category)]}&case_industry=${industries[Industries.indexOf(industry)]}`)
      }
    
    return (
        <CasesContainer>
            <Filter onChange={handleFilterChange} categories={Categories} categoryValue={category} industries={Industries} industryValue={industry}/>
            <Section>
                {
                    cases.map((singleCase) => (
                        <SingleCase key={singleCase.id} case={singleCase}/>
                    ))
                }
            </Section>
            {paginate &&
                <Paginate onChange={handlePageChange} pageNumber={pageNumber} pageCount={pageCount} pageRange={pageRange}/>
            }
            {cases.length === 0 &&
                <Message>Congrats, you have found a unicorn :) Change the filters to check out more cases!</Message>
            }
        </CasesContainer>
    );
  }
  
  export default Cases;
  