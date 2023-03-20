import React from "react";
import {FaRegMoon} from 'react-icons/fa';
import {AppBar, Box, Container, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import { BsMoon } from "react-icons/bs";

const AppHeader = styled(AppBar)`
  background-color: white;
  color: black;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);

`;
const SemiBold = styled(Typography)`
  font-weight: 600;
  font-size: 0.8rem;

  cursor: pointer;
`;
const Bold = styled(Typography)`
  font-weight: 800;
  font-size: 1.1rem;
`;
export default function Header() {
    return (
        <>
            <AppHeader position="static">
                <Container sx={{py: 2, display: 'flex', justifyContent: 'space-between'}}>


                    <Bold component="div">
                        Where in the world?
                    </Bold>
                    <div>


                        <SemiBold  component={'span'}>

                            <SemiBold component={'span'} sx={{mx: 1}}> <BsMoon/></SemiBold>
                            Dark Mode
                        </SemiBold>

                    </div>


                </Container>
            </AppHeader>
        </>

    );

}