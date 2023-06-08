import React from 'react'
import "./SearchResultsList.css";
import "./SearchResults.js"
import { SearchResults } from './SearchResults.js';

export const SearchResultsList = ({results}) => {
  return (
    <div className='results-list'>

    {
        results.map((result,id) => {
            return <SearchResults result = {result} key={id}/>; 
        })
    }

    </div>
  )
}
