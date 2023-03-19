import './App.css';
import Header from "./components/Header";
import {Box, Container, Grid} from "@mui/material";
import CountryCard from "./components/countryCard";
import FavList from "./components/favList";
import Dropdown from "./components/dropdown";
import SearchField from "./components/Search";
import React from "react";

function App() {
    return (
        <div className="App">
            <Container><Header/></Container>
            <main>
                <Container sx={{my: 5}}>
                    <Grid spacing={3} container justifyContent='space-between'>
                        <Grid item xs={12} sm={6}>
                            <SearchField/>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Dropdown/>
                        </Grid>

                    </Grid>


                </Container>

                <Container>


                    <Grid container spacing={2}>
                        <Grid item sm={3}>

                            <FavList/>

                        </Grid>
                        <Grid item sm={9}>
                            <Grid container spacing={3}>
                                <Grid item lg={4}>
                                    <CountryCard name={'USA'} img={'/flags/us.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>

                                <Grid item lg={4}>
                                    <CountryCard name={'USA'} img={'/flags/us.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>

                                <Grid item lg={4}>
                                    <CountryCard name={'USA'} img={'/flags/us.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>

                                <Grid item lg={4}>
                                    <CountryCard name={'USA'} img={'/flags/us.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>


                            </Grid>


                        </Grid>


                    </Grid>
                </Container>
            </main>
        </div>
    );
}

export default App;
