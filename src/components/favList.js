import * as React from 'react';
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
const FavDiv=styled(Box)`
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
`;
export default function FavList(){
    return (
        <FavDiv/>
    );
}