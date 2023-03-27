import Header from "./components/Header";
import {Box, Container, Grid} from "@mui/material";
import SearchField from "./components/Search";
import Dropdown from "./components/dropdown";
import FavList from "./components/favList";
import CountryCard from "./components/countryCard";
import React from "react";

export default function Home() {
    let dropdownItems=['Favourites','Africa','Americas','Asia','Europe','Oceania'];
    return (
        <>
            <Header/>
            <main>
                <Container sx={{my: 5}}>
                    <Grid spacing={3} container justifyContent='space-between'>
                        <Grid item xs={12} sm={6}>
                            <SearchField placeholder={'Search for a country...'}/>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Dropdown title={'Filter by'} items={dropdownItems}/>
                        </Grid>

                    </Grid>


                </Container>

                <Container>


                    <Grid container spacing={3}>
                        <Grid item md={3}>

                            <FavList/>

                        </Grid>
                        <Grid item sm>
                            <Grid container spacing={8}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CountryCard name={'United States of America'} img={'./React_Countries/flags/us.svg'}
                                                 population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <CountryCard name={'Brazil'} img={'./React_Countries/flags/br.svg'}
                                                 population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CountryCard name={'Germany'} img={'./React_Countries/flags/de.svg'}
                                                 population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid><Grid item xs={12} sm={6} md={4}>
                                <CountryCard name={'Afghanistan'} img={'./React_Countries/flags/af.svg'}
                                             population='323,947,000'
                                             region={'Americas'} capital={'Washingtonn.D.C'}/>

                            </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CountryCard name={'Albania'} img={'./React_Countries/flags/al.svg'}
                                                 population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CountryCard name={'Iceland'} img={'./React_Countries/flags/is.svg'}
                                                 population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>


                            </Grid>


                        </Grid>


                    </Grid>
                </Container>
                <Box sx={{p: 10}}>

                </Box>
            </main>
        </>
    );
}