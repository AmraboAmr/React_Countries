import {styled} from "@mui/material/styles";
import Header from "./components/Header";
import {Box, Button, Container, Grid, Link} from "@mui/material";
import React from "react";
import {BsArrowLeft} from "react-icons/bs"
import DetailedFeatures from "./components/DetailedFeatures";

const Div=styled("div")`
    width: 100%;
  height: 30rem;
  background-color: rebeccapurple;

`;
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
                <Container sx={{py:4}}>


                        <StyledButton sx={{px:3}} variant="contained"><Box sx={{px:1}} componetn={'span'}><BsArrowLeft/></Box>  Back</StyledButton>


                </Container>
                <Container>
                <Grid container spacing={7}>
                    <Grid item sm={6}>
                        <Div ></Div>
                    </Grid>
                    <Grid sx={{my:5}} item sm={6}>
                        <DetailedFeatures/>

                    </Grid>

                </Grid>
                </Container>
            </main>

        </>
    );

}