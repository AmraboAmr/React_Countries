import React from 'react'
import {Grid} from "@mui/material";
import {CountryCard} from "./CountryCard";



export default function Countries({countries,favCodes,setFavCode ,}) {

    return (
        <div style={{height: "80vh", overflow: "scroll" }}>
        <Grid container spacing={8}>
            {
                countries.map(country => (
                        <Grid key={country.cca3} item xs={12} sm={6} md={4}>
                            <CountryCard  name={country.name.common} img={country.flags.svg}
                                         population={country.population}
                                         region={country.region} capital={country.capital} code={country.cca3} favCodes={favCodes} setFavCode={setFavCode}
                                        />

                        </Grid>

                    )
                )
            }
        </Grid>
        </div>
    );
}