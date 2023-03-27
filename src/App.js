import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Details from "./Details";
import Home from "./Home";

const THEME = createTheme({
    typography: {
        "fontFamily": ` 'Nunito Sans', sans-serif;`,

    }

});



function App() {
    return (
        <div className="App">

            <ThemeProvider theme={THEME}>
                <Router basename={"/React_Countries"}>
                    <Routes>
                        <Route path="" element={<Home/>} />
                        <Route path="/details" element={<Details/>} />
                    </Routes>
                </Router>


            </ThemeProvider>

        </div>
    );
}

export default App;
