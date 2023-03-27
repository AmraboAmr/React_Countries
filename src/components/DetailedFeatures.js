import {Grid, MenuItem} from "@mui/material";
import React from "react";
import {Bold, BorderCountry, FlexBox, SmallLight, CountryFeature} from "../Typography";
function Borders(props) {
    return <FlexBox>
        <CountryFeature className={'borderCountriesTitle'}  >Border Countries:</CountryFeature>
        {
            props.borders.map(border => (
                <BorderCountry> <SmallLight>{border}</SmallLight></BorderCountry>

            ))
        }
    </FlexBox>;
}

export default function DetailedFeatures(){


    let borders=['France','Germany','NetherLands'];
    return(
        <div className={'paddingDetailedFeatures'}>
            <Grid container direction={"column"}>
                <Grid container spacing={4}>

                    <Grid item xs={12}>
                        <Bold>
                            Germany
                        </Bold>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CountryFeature>Native Name: <SmallLight>Bundesrepublik
                            Deutschland</SmallLight></CountryFeature>
                        <CountryFeature>Population: <SmallLight>83,240,525</SmallLight></CountryFeature>
                        <CountryFeature>Region: <SmallLight>Europe</SmallLight></CountryFeature>
                        <CountryFeature>Sub Region: <SmallLight>Western Europe</SmallLight></CountryFeature>
                        <CountryFeature>Native Name: <SmallLight>Berlin</SmallLight></CountryFeature>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CountryFeature>Top Level Domain: <SmallLight> .de</SmallLight></CountryFeature>
                        <CountryFeature>Currencies: <SmallLight>Euro</SmallLight></CountryFeature>
                        <CountryFeature>Languages: <SmallLight>German</SmallLight></CountryFeature>

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{mt: 5}}>

                    <Borders borders={borders}/>


                </Grid>
            </Grid>
        </div>
    );
}