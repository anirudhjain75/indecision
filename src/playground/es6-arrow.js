const add = (a, b) => {
    return a+b;
};

console.log(add(51,1));

const user = {
    name: 'Anirudh Jain',
    cities: ['Delhi', 'Bangalore', 'New York'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        }
        );
        this.cities.forEach( (city) => this.name + ' has lived in ' + city);
        return cityMessages;
    }
};


const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        const result = this.numbers.map((number) => number * this.multiplyBy);
        return result;
    }
    };
    console.log(multiplier.multiply());
user.printPlacesLived()