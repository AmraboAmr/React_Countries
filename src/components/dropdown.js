import * as React from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {DarkModeContext} from "../App";
import {useContext} from "react";

const Drop = styled(FormControl)`
  border: none;
  width: 100%;
  border-radius: 0.3rem;
`;
const SelectStyled = styled(Select)`
  border: none;
  
`;
const THEME = createTheme({
    typography: {
        "font-weight": "600",
    }

});

export default function Dropdown({title, items,setFilter,selectedRegion}) {
    const handleRegionChange = (event) => {
        setFilter(event.target.value);

    };
    const {darkMode}=useContext(DarkModeContext);
    return (
        <Drop className={darkMode?'darkE':'lightE'}>
            <ThemeProvider theme={THEME}>
                <InputLabel id="select-label">{title}</InputLabel>
                <SelectStyled
                    labelId="select-label"
                    label={title}
                    value={selectedRegion}
                    inputProps={{'aria-label': 'Without label'}}
                    onChange={handleRegionChange}
                    sx={{'.MuiOutlinedInput-notchedOutline': {border: 0}}}
                >

                    {
                        items.map(item => (
                            <MenuItem key={item || 'all'} value={item}>{item || 'No Filter'}</MenuItem>

                        ))
                    }

                </SelectStyled>
            </ThemeProvider>

        </Drop>
    );
}