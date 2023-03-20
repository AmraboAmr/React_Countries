import * as React from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';

import {FormControl, MenuItem, Select} from "@mui/material";

const Drop = styled(FormControl)`
 border: none;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
 width: 100%;
  background-color: white;
  border-radius: 0.3rem;
 
`;
const SelectStyled=styled(Select)`
    border: none;
`;
const THEME = createTheme({
    typography: {
       "font-weight":"600",

    }

});

export default function Dropdown() {
    return (
        <Drop >
            <ThemeProvider theme={THEME}>
            <SelectStyled
                value={""}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}

                sx={{ '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                >
                <MenuItem disabled value="">
                    <em>Filter by</em>
                </MenuItem>
                <MenuItem value={'Favourites'}>Favourites</MenuItem>
                <MenuItem value={'Africa'}>Africa</MenuItem>
                <MenuItem value={'Asia'}>Asia</MenuItem>
                <MenuItem value={'Europe'}>Europe</MenuItem>
                <MenuItem value={'Oceania'}>Oceania</MenuItem>
            </SelectStyled>
            </ThemeProvider>

        </Drop>
    );
}