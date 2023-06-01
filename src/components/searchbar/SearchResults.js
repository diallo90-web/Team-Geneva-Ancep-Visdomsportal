import React from 'react';
import "./SearchResults.css";

export const SearchResults = ({result}) => {
  return (
    <div className="search-results" onClick={(e)=> alert(`Du kliket på ${result.name}`)}>{result.name}</div>
  )
}
