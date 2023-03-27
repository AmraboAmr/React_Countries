import * as React from 'react';
import {Box, Container} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {breakpoints} from "../constants";
const FavDiv=styled(Box)`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0  .125rem .25rem rgba(0,0,0,.075);
  @media (max-width: ${breakpoints.lg}px) {
    display: none;
  }
  border-radius: 0.3rem;

`;
const FavImg=styled("img")`
  width: 2rem;
  height: 20px;
    border-radius: 0.3rem;
  vertical-align: middle;
  object-fit: cover;
`;
const Bold =styled(Typography)`
    font-weight: 800;
  font-size: 1.05rem;
`;
const Name =styled(Typography)`
    font-size: 0.8rem;
  font-weight:600 ;
`;
const FavItem=styled(Box)`
    display: flex;
  justify-content: space-between;
  margin:  0.4rem 0;
`;
const CancelButton =styled("button")`
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

export default function FavList(){
    return (
        <FavDiv>
            <Container sx={{pt:1}}>
                <Bold sx={{pb:1}} >Favourites</Bold>
               <Box componetn={'div'}>
                   <FavItem>
                       <div>
                           <FavImg src={'./React_Countries/flags/us.svg'}/>
                           <Name sx={{ml:1}} component={'span'}>United States</Name>
                       </div>
                       <CancelButton>x</CancelButton>


                   </FavItem>
                   <FavItem>
                       <div>
                           <FavImg src={'./React_Countries/flags/br.svg'}/>
                           <Name sx={{ml:1}} component={'span'}>Brazil</Name>
                       </div>
                       <CancelButton>x</CancelButton>


                   </FavItem>
                   <FavItem>
                       <div>
                           <FavImg src={'./React_Countries/flags/de.svg'}/>
                           <Name sx={{ml:1}} component={'span'}>Germany</Name>
                       </div>
                       <CancelButton>x</CancelButton>


                   </FavItem>



               </Box>






            </Container>

        </FavDiv>
    );
}