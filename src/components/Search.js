import * as React from 'react';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import {FaSearch} from "react-icons/fa";
import {InputAdornment} from "@mui/material";
const StyledTextField = styled(TextField)`
  width: 100%;
`;
export default function SearchField() {
    return (
        <>

            <StyledTextField  InputProps={{
                startAdornment: (
                    <InputAdornment sx={{mx:2}} position="start">
                        <FaSearch />
                    </InputAdornment>
                ),
            }} variant="outlined">

            </StyledTextField>

        </>


    );
}