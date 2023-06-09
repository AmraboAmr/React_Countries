import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {styled} from "@mui/material/styles";
import {Link} from 'react-router-dom';
import {breakpoints} from "../constants";
import {SmallBold, SmallLight,} from "./Typography";
import {BsFillStarFill} from "react-icons/bs"
import {Box} from "@mui/material";
import {useDrag} from 'react-dnd';
import {useContext} from "react";
import {DarkModeContext} from "../App";
import {addFav, removeFav} from "../Functionalties/favorites";


const Country = styled(Card)`

  @media (max-width: ${breakpoints.sm}px) {
    height: 24rem;
  }
`;
const Flag = styled(CardMedia)`
  object-fit: cover;
  height: 9rem;
  @media (max-width: ${breakpoints.sm}px) {
    height: 13rem;
  }
`;

const CardFeature = styled(Typography)`
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const FavStar = styled(BsFillStarFill)`
  color: lightgray;
  display: none;
  font-size: 1.4rem;
  cursor: pointer;
  @media (max-width: ${breakpoints.lg}px) {
    display: inline-block;
  }

`;

export function CountryCard({name, img, population, region, capital,code,favCodes ,setFavCode}) {
    let isFav = favCodes.includes(code);

    function handleFavClick(countryCode) {

        isFav ? setFavCode(removeFav(favCodes, countryCode)) : setFavCode(addFav(favCodes, countryCode));


    }

    const { darkMode } = useContext(DarkModeContext);
    const [{isDragging}, drag] = useDrag({
        type: 'countryCard',
        item: {id: code},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    return (

            <Country ref={drag} style={{opacity: isDragging ? 0.5 : 1}} className={darkMode?'darkE':'lightE'} >

                <Link to={`details/${code}`}>
                    <Flag

                        component="img"

                        image={img}
                        alt={name}
                    />

                </Link>
                <CardContent>


                    <Typography variant="body2">
                        <SmallBold sx={{mb: 2}} noWrap gutterBottom component="div">
                            {name}
                        </SmallBold>
                        <CardFeature> Population: <SmallLight component="span"
                                                              color='text.secondary'>{population.toLocaleString()}</SmallLight></CardFeature>
                        <CardFeature> Region: <SmallLight component="span"
                                                          color='text.secondary'>{region}</SmallLight></CardFeature>

                        <CardFeature> Capital: <SmallLight component="span"
                                                           color='text.secondary'>{capital}</SmallLight></CardFeature>


                    </Typography>
                </CardContent>
                <Box sx={{pb: 1, px: 1}} textAlign="right">
                    <FavStar onClick={() =>handleFavClick(code)} style={{color: isFav ? 'gold' : 'lightgray'}}/>
                </Box>


            </Country>

    );
}
