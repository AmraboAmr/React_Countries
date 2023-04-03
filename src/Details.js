import Header from "./components/Header";
import {Box, Container, Grid} from "@mui/material";
import {Link} from 'react-router-dom';

import React, {useEffect, useState} from "react";
import {BsArrowLeft} from "react-icons/bs"
import DetailedFeatures from "./components/DetailedFeatures";
import Flag from "./components/Flag";
import {StyledButton} from "./components/Button";
import {useParams} from "react-router-dom";
import {fetchCountryByCode} from "./Functionalties/APIs";


export default function Details() {
    const {id} = useParams();
    const [country, setCountry] = useState({});
    const [borders, setBorders] = useState([]);

    useEffect(() => {

        fetchCountryByCode(id)
            .then((country) => {
                setCountry(country);


               if(country[0].borders) {
                    let allRequests = [];

                    country[0].borders.forEach((border) => {
                        allRequests.push(fetchCountryByCode(border));
                    });

                    const allData = Promise.all(allRequests);
                    allData.then((res) => {
                        setBorders(res);
                        console.log(borders);
                    });
                }
            });
    }, [id]);
    console.log(borders);


    return (
        country[0] ?
            <>
                <Header/>
                <main>
                    <Box display="flex" flex="1">
                        <Container sx={{py: 4, mb: 4}}>
                            <Link className={"link"} to={"/"}>
                                <StyledButton sx={{px: 3}} variant="contained"><Box sx={{px: 1}}
                                                                                    componetn={'span'}><BsArrowLeft/></Box> Back</StyledButton>


                            </Link>

                        </Container>
                    </Box>
                    <Container>
                        <Grid container spacing={7}>
                            <Grid item sm={6}>
                                <Flag img={country[0].flags.svg}></Flag>
                            </Grid>
                            <Grid item sm={6}>
                                <DetailedFeatures name={country[0].name.common}
                                                  languages={Object.keys(country[0].languages).map((key) => {
                                                      return country[0].languages[key];
                                                  }).join(', ')}
                                                  currencies={Object.keys(country[0].currencies).map((key) => {
                                                      return country[0].currencies[key].name;
                                                  }).join(', ')}
                                                  capital={country[0].capital}
                                                  TLD={country[0].tld}
                                                  population={country[0].population.toLocaleString()}
                                                  region={country[0].region}
                                                  subRegion={country[0].subregion}
                                                  native={country[0].name.nativeName[Object.keys(country[0].name.nativeName)[0]].official}
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