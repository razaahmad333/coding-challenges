const windSpeed = 13;

const getSkyColor = () => {
    return "Its Blue";
};

const getWindColor = () => {
    return "Most of the time it is transparent";
}

const kingdomName = "The Sky Kingdom";

class Rocket {
    constructor(name) {
        this.name = name;
    }

    getRocketSpeed() {
        return windSpeed - 2;
    }
}

export { windSpeed, getSkyColor };

export { getWindColor, Rocket, kingdomName as default };