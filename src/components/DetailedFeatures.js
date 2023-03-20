import {Box, Grid} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Bold =styled(Typography)`
    font-weight: 800;
  font-size: 2rem ;
`;
const Light =styled("span")`
    font-weight: 300;
  font-size: 0.8rem;
`;
const Border =styled('span')`
    background-color: white;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  padding: 0.5rem 1rem;
  text-align: center;
  width: max-content;
  border-radius: 0.3rem;
  margin: 0 10px;
  
    
`;
const SemiBold =styled(Typography)`
    font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const FlexBox=styled(Box)`
display: flex;

`;
const TextCentered=styled(SemiBold)`
text-align: center;
  padding: 0.5rem 0;
`
export default function DetailedFeatures(){
    return(
        <>
            <Grid container direction={"column"}  >
                <Grid container   >

                    <Grid sx={{mb:4}} item xs={12}>
                        <Bold>
                            Germany
                        </Bold>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SemiBold>Native Name: <Light >Bundesrepublik Deutschland</Light></SemiBold>
                        <SemiBold>Population: <Light >83,240,525</Light></SemiBold>
                        <SemiBold>Region: <Light >Europe</Light></SemiBold>
                        <SemiBold>Sub Region: <Light>Western Europe</Light></SemiBold>
                        <SemiBold>Native Name: <Light >Berlin</Light></SemiBold>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SemiBold>Top Level Domain: <Light > .de</Light></SemiBold>
                        <SemiBold>Currencies: <Light >Euro</Light></SemiBold>
                        <SemiBold>Languages: <Light >German</Light></SemiBold>

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{mt:5}} >
                    <FlexBox>
                        <TextCentered cmponent={'span'}>Border Countries:</TextCentered>
                        <Border> <Light >France</Light></Border>
                        <Border> <Light >Germany</Light></Border>
                        <Border> <Light >Netherlands</Light></Border>
                    </FlexBox>



                </Grid>
            </Grid>
        </>
    );
}