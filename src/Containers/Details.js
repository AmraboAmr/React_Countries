import Header from "../components/Header";
import {Box, Button, Container, Grid} from "@mui/material";
import {Link} from 'react-router-dom';

import React, {useContext, useEffect, useState} from "react";
import {BsArrowLeft} from "react-icons/bs"
import DetailedFeatures from "../components/DetailedFeatures";
import Flag from "../components/Flag";
import {useParams} from "react-router-dom";
import {fetchCountryByCode} from "../Functionalties/APIs";
import {DarkModeContext} from "../App";


export default function Details() {
    const {id} = useParams();
    const [country, setCountry] = useState({});
    const [borders, setBorders] = useState([]);
    const {darkMode} = useContext(DarkModeContext);

    useEffect(() => {
        fetchCountryByCode(id)
            .then((country) => {
                setCountry(country[0]);

            });


    }, [id]);

    useEffect(() => {
        if (Object.keys(country).length === 0) return;
        if (!country.borders) return;


        Promise.all(country.borders.map((border) => fetchCountryByCode(border)))
            .then((res) => {
            setBorders(res);

        });

    }, [country, borders]);


    return (
        Object.keys(country).length ?

            <>
                <Header/>
                <main>
                    <Box display="flex" flex="1">
                        <Container sx={{py: 4, mb: 4}}>
                            <Link className={"link"} to={"/"}>
                                <Button className={darkMode ? 'darkE' : 'lightE'} sx={{px: 3}} variant="contained"><Box
                                    sx={{px: 1}}
                                    componetn={'span'}><BsArrowLeft/></Box> Back</Button>


                            </Link>

                        </Container>
                    </Box>
                    <Container>
                        <Grid container spacing={7}>
                            <Grid item sm={6}>
                                <Flag img={country.flags.svg}></Flag>
                            </Grid>
                            <Grid item sm={6}>
                                <DetailedFeatures name={country.name.common}
                                                  languages={Object.keys(country.languages).map((key) => {
                                                      return country.languages[key];
                                                  }).join(', ')}
                                                  currencies={Object.keys(country.currencies).map((key) => {
                                                      return country.currencies[key].name;
                                                  }).join(', ')}
                                                  capital={country.capital}
                                                  TLD={country.tld}
                                                  population={country.population.toLocaleString()}
                                                  region={country.region}
                                                  subRegion={country.subregion}
                                                  native={country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}
                                                  borders={borders}

                                />

                            </Grid>

                        </Grid>
                    </Container>
                    <Box sx={{p: 10}}>

                    </Box>
                </main>

            </> : <Header/>
    );


}