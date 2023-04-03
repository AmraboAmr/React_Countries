import React from 'react';
import SearchField from '../components/Search';

const SearchContainer = ({setSearchValue}) => {
    let debounceTimeout;

    const handleSearchValueChange = (event) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            setSearchValue(event.target.value);
        }, 300);

    };

    return (
        <SearchField
            onInput={handleSearchValueChange}
            placeholder={'Search for a country...'}/>
    );
}
export default SearchContainer;