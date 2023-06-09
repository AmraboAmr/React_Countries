import * as React from 'react';
import {Box, Container} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {breakpoints} from "../constants";
import {useDrop} from "react-dnd";
import {Link} from 'react-router-dom';
import {DarkModeContext} from "../App";
import {useContext} from "react";
import {addFav, removeFav} from "../Functionalties/favorites";

const FavDiv = styled(Box)`
  overflow: scroll;
  
  width: 100%;
  height: 80vh;
  position: relative;
  z-index: 10;
  @media (max-width: ${breakpoints.lg}px) {
    display: none;
  }
  border-radius: 0.3rem;

`;
const FavImg = styled("img")`
  width: 2rem;
  height: 20px;
  border-radius: 0.3rem;
  vertical-align: middle;
  object-fit: cover;
`;
const Bold = styled(Typography)`
  font-weight: 800;
  font-size: 1.05rem;
`;
const Name = styled(Typography)`
  font-size: 0.8rem;
  font-weight: 600;
`;
const FavItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 0.4rem 0;
`;
const CancelButton = styled("button")`
  background-color: ${({darkMode}) => (darkMode ? "#202c37" : "white")};
  color: ${({darkMode}) => (darkMode ? "white" : "black")};
  width: 19px;
  height: 19px;
  border: none;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  border-radius: 50%;
  cursor: pointer;
`;

export default function FavList({favCountries,favCodes, setFavCountries }) {
    function onDrop(countryCode) {
        setFavCountries(addFav(favCodes, countryCode));
    }
    function handleRemoveFavorite (code){
        setFavCountries( removeFav(favCodes,code));
    }

    const {darkMode} =useContext(DarkModeContext);
    const [{isOver}, drop] = useDrop({
        accept: 'countryCard',
        drop: (item) => onDrop(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),

        }),
    });

    const borderStyle = isOver ? '2px #27ae60 dashed' : 'none';

    return (
        <div ref={drop} style={{border: borderStyle}}>
            <FavDiv className={darkMode?'darkE':'lightE'}>
                <Container sx={{pt: 1}}>
                    <Bold sx={{pb: 1}}>Favourites</Bold>
                    <Box>
                        {favCountries.map((favorite) => (
                            <FavItem key={favorite.cca3}>
                                <div>
                                    <Link to={`details/${favorite.cca3}`}>
                                    <FavImg src={favorite.flags.svg}/>
                                    </Link>
                                    <Name sx={{ml: 1}} component={'span'}>{favorite.name.common}</Name>
                                </div>
                                <CancelButton darkMode={darkMode} onClick={() => handleRemoveFavorite(favorite.cca3)}>x</CancelButton>


                            </FavItem>
                        ))}
                    </Box>


                </Container>

            </FavDiv>
        </div>
    );
}