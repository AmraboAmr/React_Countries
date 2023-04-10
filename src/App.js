import {createTheme, ThemeProvider} from '@mui/material/styles';
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Details from "./Containers/Details";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend';
import Home from "./Containers/Home";
import {createContext, useState} from 'react';
import {getFromLocalStorage, setInLocalStorage} from "./Functionalties/LocalStorage";
import {THEME} from "./constants";

export const DarkModeContext = createContext(false);

const Font = createTheme({
    typography: {
        "fontFamily": ` 'Nunito Sans', sans-serif;`,
    },
});

function App() {
    const [darkMode, setDarkMode] = useState(getFromLocalStorage(THEME)|| false);
    useEffect(() => {
            setInLocalStorage(THEME, darkMode);
        },[darkMode]);

        function toggleTheme() {
            setDarkMode(!darkMode);
        }
    return (
        <DarkModeContext.Provider value={{darkMode, toggleTheme}}>
            <div style={{backgroundColor: darkMode ? '#202c37' : '#fafafa'}} >
                <DndProvider backend={HTML5Backend}>
                    <ThemeProvider theme={Font}>
                        <Router basename={"/React_Countries"}>
                            <Routes>
                                <Route path="" Component={Home}/>
                                <Route path="/details/:id" Component={Details}/>
                            </Routes>
                        </Router>

                    </ThemeProvider>
                </DndProvider>

            </div>
        </DarkModeContext.Provider>
    );
}

export default App;
