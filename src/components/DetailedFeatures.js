import {Grid, MenuItem} from "@mui/material";
import React from "react";
import {Bold, BorderCountry, FlexBox, SmallLight, CountryFeature} from "./Typography";

function Borders(props) {
    return <FlexBox>
        <CountryFeature className={'borderCountriesTitle'}>Border Countries:</CountryFeature>
        {
            props.borders.map((border) => (

                <BorderCountry> <SmallLight>{border[0].name.common}</SmallLight></BorderCountry>

            ))
        }
    </FlexBox>;
}

export default function DetailedFeatures({
                                             name,
                                             native,
                                             population,
                                             region,
                                             subRegion,
                                             capital,
                                             TLD,
                                             currencies,
                                             languages,
                                             borders
                                         }) {


    return (
        <div className={'paddingDetailedFeatures'}>
            <Grid container direction={"column"}>
                <Grid container spacing={4}>

                    <Grid item xs={12}>
                        <Bold>
                            {name}
                        </Bold>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CountryFeature>Native Name: <SmallLight>{native}</SmallLight></CountryFeature>
                        <CountryFeature>Population: <SmallLight>{population}</SmallLight></CountryFeature>
                        <CountryFeature>Region: <SmallLight>{region}</SmallLight></CountryFeature>
                        <CountryFeature>Sub Region: <SmallLight>{subRegion}</SmallLight></CountryFeature>
                        <CountryFeature>Capital: <SmallLight>{capital}</SmallLight></CountryFeature>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CountryFeature>Top Level Domain: <SmallLight> {TLD}</SmallLight></CountryFeature>
                        <CountryFeature>Currencies: <SmallLight>{currencies}</SmallLight></CountryFeature>
                        <CountryFeature>Languages: <SmallLight>{languages}</SmallLight></CountryFeature>

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{mt: 5}}>

                    <Borders borders={borders}/>


                </Grid>
            </Grid>
        </div>
    );
}