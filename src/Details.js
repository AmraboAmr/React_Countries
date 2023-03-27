import Header from "./components/Header";
import {Box, Container, Grid} from "@mui/material";
import {Link} from 'react-router-dom';

import React from "react";
import {BsArrowLeft} from "react-icons/bs"
import DetailedFeatures from "./components/DetailedFeatures";
import Flag from "./components/Flag";
import {StyledButton} from "./components/Button";


export default function Details() {
    return (
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
                            <Flag img={'flags/de.svg'}></Flag>
                        </Grid>
                        <Grid item sm={6}>
                            <DetailedFeatures/>

                        </Grid>

                    </Grid>
                </Container>
                <Box sx={{p: 10}}>

                </Box>
            </main>

        </>
    );

}