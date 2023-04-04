import Dropdown from '../components/dropdown';

function FilterDropdownContainer({setFilter, filter}) {
    let dropdownItems = ['', 'Favourites', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const handleRegionChange = (event) => {
        setFilter(event.target.value);

    };

    return <Dropdown title={'Filter by'} items={dropdownItems} selectedRegion={filter}
                     handleRegionChange={handleRegionChange}/>;
}

export default FilterDropdownContainer;
