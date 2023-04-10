import * as React from 'react';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import {FaSearch} from "react-icons/fa";
import {InputAdornment} from "@mui/material";
import {DarkModeContext} from "../App";
import {useContext} from "react";

const StyledTextField = styled(TextField)`
  & .MuiInputBase-input::placeholder {
    color: ${({darkMode}) => (darkMode ? "lightgray" : "gray")};
  }
  
  width: 100%;
  border-radius: 0.3rem;
 

`;
export default function SearchField({setSearchValue ,placeholder}) {
    let debounceTimeout;


    const handleSearchValueChange = (event) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            setSearchValue(event.target.value);


        }, 300);
    };

    const {darkMode}=useContext(DarkModeContext);
    return (
        <>

            <StyledTextField className={darkMode?'darkE':'lightE'}
                             darkMode={darkMode}
                             placeholder={placeholder}
                             sx={{'.MuiOutlinedInput-notchedOutline': {border: 0}}}
                             onInput={handleSearchValueChange}
                             InputProps={{
                                 startAdornment: (
                                     <InputAdornment sx={{mx: 2}} position="start">
                                         <FaSearch style={{color : darkMode ? 'lightgray' :'gray'}}/>
                                     </InputAdornment>
                                 ),
                             }} variant="outlined">

            </StyledTextField>

        </>


    );
}