import React from 'react';
import ReactPaginate from 'react-paginate'

import {Divider, PaginateContainer} from './Paginate.style.js';

function Paginate(props) {
    return (
        <>
            <Divider />
            <PaginateContainer>
                <ReactPaginate onPageChange={props.onChange} previousLabel="" nextLabel="" initialPage={0} forcePage={props.pageNumber} pageCount={props.pageCount} marginPagesDisplayed={1} pageRangeDisplayed={props.pageRange} containerClassName="paginate-container" pageClassName="page" breakClassName="ellipsis" previousClassName="previous" nextClassName="next" activeClassName="active"/>
            </PaginateContainer>
        </>
    );
  }
  
  export default Paginate;
  