export function removeFav(favoritesCode, index) {
    let favArray = [...favoritesCode];
    favArray.splice(index, 1);
    return favArray;
}

export function addFav(favoritesCode, countryCode) {
    let favArray = [...favoritesCode];
    let alreadyFav = favArray.find((fav) => fav === countryCode);
    if (!alreadyFav) {
        favArray.push(countryCode);
    }
    return favArray;
}