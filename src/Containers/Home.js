import Header from "../components/Header";
import {Box, Container, Grid} from "@mui/material";
import React, {useState, useEffect} from "react";
import {fetchCountry} from "../Functionalties/APIs";
import {filterCountries} from "../Functionalties/Countries";
import {FAV_KEY} from "../constants";
import {getFromLocalStorage, setInLocalStorage} from "../Functionalties/LocalStorage";
import Countries from "../components/Countries";
import SearchField from "../components/Search";
import FavList from "../components/favList";
import Dropdown from "../components/dropdown";

export default function Home() {
    let dropdownItems = ['', 'Favourites', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState('');
    const [countries, setCountries] = useState([]);
    const [favCode, setFavCode] = useState(getFromLocalStorage(FAV_KEY) || []);
    let [favCountries, setFavCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setInLocalStorage(FAV_KEY, favCode);
    }, [favCode]);

    useEffect(()=>{
        if(countries.length)setFilteredCountries(filterCountries(countries, filter, favCode));

    },[countries,filter,favCode]);


    useEffect(()=>{
        let filteredFav =favCode.map((code) => filteredCountries.find((country) => country.cca3 === code));
        setFavCountries(filteredFav.filter((value) => value !== undefined));
    },[filter,filteredCountries ,favCode]);
    useEffect(() => {
        fetchCountry(searchValue)
            .then((countries) => {
                setCountries(countries);
            });
    }, [searchValue]);
        return (
        <>
            <Header/>
            <main>
                <Container sx={{my: 5}}>
                    <Grid spacing={3} container justifyContent='space-between'>
                        <Grid item xs={12} sm={6}>
                            <SearchField placeholder={'Search for a country...'}
                                         setSearchValue={setSearchValue}/>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Dropdown title={'Filter by'} items={dropdownItems} setFilter={setFilter}
                                      selectedRegion={filter}
                            />
                        </Grid>

                    </Grid>

                </Container>

                <Container>


                    <Grid container spacing={3}>
                        <Grid item md={3}>

                            <FavList
                                favCountries={favCountries}
                                favCodes={favCode}
                                setFavCountries={setFavCode}/>

                        </Grid>
                        <Grid item sm>

                            <Countries countries={filteredCountries} favCodes={favCode} setFavCode={setFavCode}/>

                        </Grid>
                    </Grid>
                </Container>
                <Box sx={{p: 10}}>

                </Box>
            </main>
        </>
    );
}