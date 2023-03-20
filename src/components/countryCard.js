import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Link} from '@mui/material';
import {styled} from "@mui/material/styles";
import {BrowserRouter as Router} from "react-router-dom";
const Country =styled(Card)`
    
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);

  @media (max-width: 576px) {
    height: 27rem;
    margin:0 1.5rem;
    
    
  }
    
    
`;
const Flag =styled(CardMedia)`
    object-fit: cover;
    height: 9rem;
  @media (max-width: 576px) {
   height: 15rem;
  }
`;

const SemiBold =styled(Typography)`
    font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const Bold =styled(Typography)`
    font-weight: 800;
  font-size: 1.05rem;
`;
const Light =styled(Typography)`
    font-weight: 300;
  font-size: 0.8rem;
`;

export default function countryCard (props) {
    return (
        <Country>
            <Link  to="details">
                <Flag

                    component="img"

                    image={props.img}
                    alt={props.name}
                />

            </Link>





            <CardContent sx={{mx:1}}  >






                    <Bold sx={{mb:1}} noWrap  gutterBottom  component="div">
                        {props.name}
                    </Bold>
                    <Typography variant="body2" >
                        <SemiBold > Population: <Light component="span"
                                                             color='text.secondary'>{props.population}</Light></SemiBold>
                        <SemiBold > Region: <Light  component="span"
                                                             color='text.secondary'>{props.region}</Light></SemiBold>

                        <SemiBold > Capital: <Light  component="span"
                                                             color='text.secondary'>{props.capital}</Light></SemiBold>





                    </Typography>


            </CardContent>

        </Country>
    );
}
