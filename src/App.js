import './App.css';
import Header from "./components/Header";
import { Container, Grid} from "@mui/material";
import CountryCard from "./components/countryCard";
import FavList from "./components/favList";
import Dropdown from "./components/dropdown";
import SearchField from "./components/Search";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";
const THEME = createTheme({
    typography: {
        "fontFamily": ` 'Nunito Sans', sans-serif;`,

    }

});
function App() {
    return (
        <div className="App">
            <ThemeProvider theme={THEME}>
            <Header/>
            <main>
                <Container sx={{my: 5}}>
                    <Grid spacing={3} container justifyContent='space-between'>
                        <Grid item xs={12} sm={6}>
                            <SearchField/>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Dropdown/>
                        </Grid>

                    </Grid>


                </Container>

                <Container>


                    <Grid container spacing={3}>
                        <Grid item md={3}>

                            <FavList />

                        </Grid>
                        <Grid item sm={9}>
                            <Grid container spacing={8}>
                                <Grid item xs={12} sm={6} md={4} >
                                    <CountryCard name={'United States'} img={'/flags/us.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <CountryCard name={'Brazil'} img={'/flags/br.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>
                                <Grid item xs={12} sm={6} md={4} >
                                    <CountryCard name={'Germany'} img={'/flags/de.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid><Grid item xs={12} sm={6} md={4} >
                                    <CountryCard name={'Afghanistan'} img={'/flags/af.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>
                                <Grid item xs={12} sm={6} md={4} >
                                    <CountryCard name={'Albania'} img={'/flags/al.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>
                                <Grid item xs={12} sm={6} md={4} >
                                    <CountryCard name={'Iceland'} img={'/flags/is.svg'} population='323,947,000'
                                                 region={'Americas'} capital={'Washingtonn.D.C'}/>

                                </Grid>





                            </Grid>


                        </Grid>


                    </Grid>
                </Container>
            </main>
            </ThemeProvider>
        </div>
    );
}

export default App;
