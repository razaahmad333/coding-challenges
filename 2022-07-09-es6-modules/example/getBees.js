const bees = [
    "bee1", "bee2", "bee3"
];


export const beesOfKingdom = (kingdom) => {
    return bees.map(bee => bee + ' in ' + kingdom)
}


export default function beesFromFunction() {
    return bees;
};
