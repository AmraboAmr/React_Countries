import React from "react";
import {styled} from "@mui/material/styles";

const CountryFlag =styled("img")`

`;
export default function Flag(props){
    return(
        <CountryFlag src={props.img}/>
    );

}