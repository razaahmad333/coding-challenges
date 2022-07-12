import { getCountries } from "./helpers.js";


const map = {
    "Asia": {
        show: true,
    },
    "Africa": {
        show: true,
    },
    "Europe": {
        show: false,
    },
};

for (let continent in map) {
    console.log('\n');
    if (map[continent].show) {
        console.log(getCountries(continent))
    }
}