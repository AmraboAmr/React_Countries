import * as React from 'react';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import {FaSearch} from "react-icons/fa";
import {InputAdornment} from "@mui/material";

const StyledTextField = styled(TextField)`
  width: 100%;
  background-color: white;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
  border-radius: 0.3rem;

`;
export default function SearchField({placeholder, onInput}) {
    return (
        <>

            <StyledTextField onInput={onInput} placeholder={placeholder}
                             sx={{'.MuiOutlinedInput-notchedOutline': {border: 0}}}
                             InputProps={{
                                 startAdornment: (
                                     <InputAdornment sx={{mx: 2}} position="start">
                                         <FaSearch/>
                                     </InputAdornment>
                                 ),
                             }} variant="outlined">

            </StyledTextField>

        </>


    );
}