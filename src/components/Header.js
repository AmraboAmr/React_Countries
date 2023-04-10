import React, {useContext} from "react";
import {AppBar, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import { BsMoon } from "react-icons/bs";
import {DarkModeContext} from "../App";


const SemiBold = styled(Typography)`
  font-weight: 600;
  font-size:1rem;

  cursor: pointer;
`;
const Bold = styled(Typography)`
  font-weight: 800;
  font-size: 1.2rem;
`;
export default function Header() {
    const { darkMode ,toggleTheme } = useContext(DarkModeContext);

    return (
        <>
            <AppBar className={darkMode?'darkE':'lightE'}  position="static">
                <Container sx={{py: 2, display: 'flex', justifyContent: 'space-between'}}>


                    <Bold component="div">
                        Where in the world?
                    </Bold>
                    <div>


                        <SemiBold onClick={toggleTheme}  component={'span'}>

                            <SemiBold  component={'span'} sx={{mx: 1}}> <BsMoon/></SemiBold>
                            Dark Mode
                        </SemiBold>

                    </div>


                </Container>
            </AppBar>
        </>

    );

}