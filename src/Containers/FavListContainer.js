import FavList from "../components/favList";
import {addFav, removeFav} from "../Functionalties/favorites";

export default function FavListContainer({favCountries, favCodes, setFavCountries}) {

    function onDrop(countryCode) {
        setFavCountries(addFav(favCodes, countryCode));
    }
    function handleRemoveFavorite (index){
        setFavCountries( removeFav(favCodes,index));
    }

    return (<FavList favorites={favCountries} onDrop={onDrop} handleRemoveFavorite={handleRemoveFavorite}/>)

}