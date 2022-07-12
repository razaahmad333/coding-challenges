import continents from "./continents.js";
import countries from "./countries.js";


export const getContinentIdFromName = (name) => {
    const continent = continents.find(continent => continent.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return continent.id;
}


export const getCountries = (continent) => {
    const continentId = getContinentIdFromName(continent);
    return countries.filter(country => country.continentId === continentId);
}