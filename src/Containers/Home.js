import Header from "../components/Header";
import {Box, Container, Grid} from "@mui/material";
import React, {useState, useEffect} from "react";
import SearchContainer from "./SearchContainer";
import {fetchCountry} from "../Functionalties/APIs";
import {filterCountries} from "../Functionalties/Countries";
import FilterDropdownContainer from "./FilterDropDownContainer";
import FavListContainer from "./FavListContainer";
import {FAV_KEY} from "../constants";
import {getFromLocalStorage, setInLocalStorage} from "../Functionalties/LocalStorage";
import Countries from "../components/Countries";

export default function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState('');
    const [countries, setCountries] = useState([]);
    const [favCode, setFavCode] = useState(getFromLocalStorage(FAV_KEY) || []);
    useEffect(() => {
        setInLocalStorage(FAV_KEY, favCode);
    }, [favCode])


    useEffect(() => {
        fetchCountry(searchValue)
            .then((countries) => {
                setCountries(countries);
            });
    }, [searchValue]);
    let filteredCountries = filterCountries(countries, filter, favCode);
    let favCountries = favCode.map((code) => filteredCountries.find((country) => country.cca3 === code));
    favCountries = favCountries.filter((value) => value !== undefined);
    return (
        <>
            <Header/>
            <main>
                <Container sx={{my: 5}}>
                    <Grid spacing={3} container justifyContent='space-between'>
                        <Grid item xs={12} sm={6}>
                            <SearchContainer setSearchValue={setSearchValue}/>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <FilterDropdownContainer setFilter={setFilter} filter={filter}/>
                        </Grid>

                    </Grid>

                </Container>

                <Container>


                    <Grid container spacing={3}>
                        <Grid item md={3}>

                            <FavListContainer
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