import React from "react";
import {styled} from "@mui/material/styles";
import {breakpoints} from "../constants";

const CountryFlag =styled("img")`
    object-fit: cover;
  width: 100%;
  height: 24rem;
  @media (max-width: ${breakpoints.sm}px) {
    height:15rem;
  }

`;
export default function Flag(props){
    return(
        <CountryFlag src={props.img}/>
    );

}