import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';


export default function countryCard (props) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img}
                    alt={props.name}
                />
            </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" >
                        <Typography> Population: <Typography component="span"
                                                             color='text.secondary'>{props.population}</Typography></Typography>
                        <Typography> Region: <Typography component="span"
                                                             color='text.secondary'>{props.region}</Typography></Typography>

                        <Typography> Capital: <Typography component="span"
                                                             color='text.secondary'>{props.capital}</Typography></Typography>





                    </Typography>
                </CardContent>

        </Card>
    );
}
