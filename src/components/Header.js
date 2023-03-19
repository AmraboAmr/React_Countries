import React from "react";
import './headerStyle.css';
import { FaRegMoon } from 'react-icons/fa';
import {Container} from "@mui/material";

export default function Header() {
    return (
 <header>
     <Container>
   <span id="headerTitle">
       Where in the world?
   </span>
            <span id="headerRight">
          <FaRegMoon/>
        <span>Dark Mode</span>
    </span>
     </Container>
    </header>
    );

}