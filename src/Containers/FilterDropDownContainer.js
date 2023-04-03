import Dropdown from '../components/dropdown';

function FilterDropdownContainer({setFilter}) {
    let dropdownItems = ['', 'Favourites', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    let selectedRegion;
    const handleRegionChange = (event) => {
        selectedRegion = event.target.value;
        setFilter(selectedRegion);

    };

    return <Dropdown title={'Filter by'} items={dropdownItems} selectedRegion={selectedRegion}
                     handleRegionChange={handleRegionChange}/>;
}

export default FilterDropdownContainer;
