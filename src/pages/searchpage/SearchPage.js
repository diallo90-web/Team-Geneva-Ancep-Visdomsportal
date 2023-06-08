import "./SearchPage.css"
import { useState } from "react"
import { SearchBar } from "../../components/searchbar/SearchBar";
import { SearchResultsList } from "../../components/searchbar/SearchResultsList";


const SearchPage = () => {

    const [results, setResults] = useState([]);

    return (
        <div className="search-page__container">
            <div className= "search-page__container-wrapper"> 
                <h2 className="container-wrapper__h2">Søk i Arne Næss sine verk</h2>
                <SearchBar setResults = {setResults} />
                <SearchResultsList results ={results} />
            </div>
        </div>
    )
}

export default SearchPage;