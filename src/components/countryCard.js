import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {styled} from "@mui/material/styles";
import {Link} from 'react-router-dom';
import {breakpoints} from "../constants";
import {SmallBold, SmallLight,} from "../Typography";
import {BsFillStarFill} from "react-icons/bs"
import {Box} from "@mui/material";

const CountryCard = styled(Card)`
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
  @media (max-width: ${breakpoints.sm}px) {
    height: 24rem;
    margin: 0 1.5rem;
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
const FavStar=styled(BsFillStarFill)`
color: lightgray;
  display: none;
  font-size: 1.4rem;
  @media (max-width: ${breakpoints.sm}px) {
    display: inline-block;
  }
  
`;

export default function countryCard(props) {
    return (
        <CountryCard>

            <Link to="details">
                <Flag

                    component="img"

                    image={props.img}
                    alt={props.name}
                />

            </Link>
            <CardContent>


                <Typography variant="body2">
                    <SmallBold sx={{mb: 2}} noWrap gutterBottom component="div">
                        {props.name}
                    </SmallBold>
                    <CardFeature> Population: <SmallLight component="span"
                                                          color='text.secondary'>{props.population}</SmallLight></CardFeature>
                    <CardFeature> Region: <SmallLight component="span"
                                                      color='text.secondary'>{props.region}</SmallLight></CardFeature>

                    <CardFeature> Capital: <SmallLight component="span"
                                                       color='text.secondary'>{props.capital}</SmallLight></CardFeature>


                </Typography>
            </CardContent>
            <Box sx={{pb:1 , px:1}} textAlign="right">
                <FavStar/>
            </Box>


        </CountryCard>
    );
}
