import './App.css';
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
                <Router>

                <Routes>
                <Route path="/React_Countries/" element={<Home />}>
                    <Route path="/React_Countries/details" element={<Details />} />

                </Route>
                </Routes>
                </Router>


            </ThemeProvider>

        </div>
    );
}

export default App;
