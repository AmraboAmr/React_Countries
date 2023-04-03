import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Details from "./Details";
import HomeContainer from "./Containers/HomeContainer";
import {DndProvider} from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

const THEME = createTheme({
    typography: {
        "fontFamily": ` 'Nunito Sans', sans-serif;`,

    }

});



function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>

            <ThemeProvider theme={THEME}>
                <Router basename={"/React_Countries"}>
                    <Routes>
                        <Route path="" element={<HomeContainer/>} />
                        <Route path="/details" element={<Details/>} />
                    </Routes>
                </Router>


            </ThemeProvider>
            </DndProvider>

        </div>
    );
}

export default App;
