import * as React from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const Drop = styled(FormControl)`
  border: none;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
  width: 100%;
  background-color: white;
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

export default function Dropdown(props) {
    return (
        <Drop>
            <ThemeProvider theme={THEME}>
                <InputLabel id="select-label">{props.title}</InputLabel>
                <SelectStyled
                    labelId="select-label"
                    label={props.title}
                    value={""}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}

                    sx={{'.MuiOutlinedInput-notchedOutline': {border: 0}}}
                >

                    {
                        props.items.map(item => (
                            <MenuItem value={item}>{item}</MenuItem>

                        ))
                    }

                </SelectStyled>
            </ThemeProvider>

        </Drop>
    );
}