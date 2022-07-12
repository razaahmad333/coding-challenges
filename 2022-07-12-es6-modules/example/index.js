import nameOfKingdom from './oceans.js';
import { isThereBeesInOceann as areBeesFoundInOceans, oceanicBees } from './oceans.js';

import landKingdomName, { areBeesFound as areBeesFoundOnLand } from './land.js';

import skyKingdomName from './sky.js';
import { getSkyColor, getWindColor, Rocket, windSpeed } from './sky.js';

import { beesOfKingdom } from './getBees.js'

console.log(nameOfKingdom)
if (areBeesFoundInOceans) {
    console.log('oceans in bees')
    console.log(oceanicBees);
}


console.log('\n');
console.log(landKingdomName);
if (areBeesFoundOnLand) {
    const beesOnLand = beesOfKingdom('land')
    console.log(beesOnLand)
}

console.log('\n');
console.log(skyKingdomName);
const rocket1 = new Rocket('rocket1')
console.log("The Speed of rocket is " + rocket1.getRocketSpeed())
console.log(getSkyColor());
console.log(getWindColor());
console.log("The Speed of wind is", windSpeed);

