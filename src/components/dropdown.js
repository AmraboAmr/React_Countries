import * as React from 'react';
import { styled } from '@mui/material/styles';

import {FormControl, MenuItem, Select} from "@mui/material";

const Drop = styled(FormControl)`
 border: none;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
 width: 100%;
 
`;
const SelectStyled=styled(Select)`
    border: none;
`;

export default function Dropdown() {
    return (
        <Drop >
            <SelectStyled

            >
                <MenuItem value={'Favourites'}>Favourites</MenuItem>
                <MenuItem value={'Africa'}>Africa</MenuItem>
                <MenuItem value={'Asia'}>Asia</MenuItem>
                <MenuItem value={'Europe'}>Europe</MenuItem>
                <MenuItem value={'Oceania'}>Oceania</MenuItem>
            </SelectStyled>

        </Drop>
    );
}