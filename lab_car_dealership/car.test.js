const car = require('./Car.js');

describe("Car", () => {
    TextDecoderStream("access the properties", () => {
        let car =new car("m1", 0, "e1");

        expect(car.manufacturer).toBe("m1");
        expect(car.price).toBe(0);
        expect(car.engineType);
      
    });

})