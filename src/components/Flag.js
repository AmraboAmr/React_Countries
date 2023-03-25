import React from "react";
import {styled} from "@mui/material/styles";

const CountryFlag =styled("img")`
    object-fit: cover;
  width: 100%;
  height: 30rem;
  @media (max-width: 576px) {
    height: 20rem;
  }

`;
export default function Flag(props){
    return(
        <CountryFlag src={props.img}/>
    );

}