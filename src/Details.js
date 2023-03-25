import {styled} from "@mui/material/styles";
import Header from "./components/Header";
import {Box, Button, Container, Grid} from "@mui/material";
import { Link } from 'react-router-dom';

import React from "react";
import {BsArrowLeft} from "react-icons/bs"
import DetailedFeatures from "./components/DetailedFeatures";
import Flag from "./components/Flag";


const StyledButton=styled(Button)`
    background-color: white;
  color: black;
  &:hover {
    background: white;
  }
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);

`;


export default function Details(){
    return(
        <>
            <Header/>
            <main>
                <Container sx={{py:4 , mb:4}}>
                    <Link className={"link"} to={"/"}>
                        <StyledButton sx={{px:3}} variant="contained"><Box sx={{px:1}} componetn={'span'}><BsArrowLeft/></Box>  Back</StyledButton>


                    </Link>




                </Container>
                <Container>
                <Grid container spacing={7}>
                    <Grid item sm={6}>
                        <Flag img={'/React_Countries/flags/br.svg'} ></Flag>
                    </Grid>
                    <Grid sx={{my:10}} item sm={6}>
                        <DetailedFeatures/>

                    </Grid>

                </Grid>
                </Container>
            </main>

        </>
    );

}