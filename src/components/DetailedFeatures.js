import {Grid} from "@mui/material";
import React, {useContext} from "react";
import {Bold, BorderCountry, FlexBox, SmallLight, CountryFeature} from "./Typography";
import {DarkModeContext} from "../App";
import {styled} from "@mui/material/styles";


function Borders({borders, darkMode}) {

    return <FlexBox>
        <CountryFeature className={'borderCountriesTitle'}>Border Countries:</CountryFeature>
        {
            borders.map((border) => (


                <BorderCountry className={darkMode?'darkE':'lightE'}  key={border[0].cca3}>
                    <SmallLight>{border[0].name.common}</SmallLight></BorderCountry>


            ))
        }
    </FlexBox>;
}

const FontTheme = styled('div')`
  color: ${({darkMode}) => (darkMode ? "white" : "black")};
`;
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

    const {darkMode} = useContext(DarkModeContext);


    return (<FontTheme darkMode={darkMode} className={'paddingDetailedFeatures'}>
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

                    <Borders darkMode={darkMode} borders={borders}/>


                </Grid>
            </Grid>
        </FontTheme>
    );
}