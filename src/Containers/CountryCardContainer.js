import {CountryCard} from "../components/CountryCard";
import React from "react";
import {addFav, removeFav} from "../Functionalties/favorites";

export default function CountryCardContainer({name, img, population, region, capital, code, favCodes,setFavCode}) {
    let isFav = favCodes.includes(code);;

    function handleFavClick(countryCode) {


            isFav ? setFavCode(removeFav(favCodes, favCodes.indexOf(countryCode))) : setFavCode(addFav(favCodes, countryCode));


    }
    return (
        <CountryCard name={name} img={img}
                     population={population}
                     region={region} capital={capital} code={code}
                     isFav={isFav} handleFavClick={handleFavClick}/> );
}