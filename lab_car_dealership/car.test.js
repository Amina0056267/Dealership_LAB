const car = require('./Car.js');

const car = new Car('BMW', 1000, 2000);

describe("properties to access", () => {

    test('getting the car manufactuerer', () => {
        expected = "BMW";
        actual = car.getManufacturer();
        expect(actual).toBe(expected);
      
    });

    test('getting the car price', () => {
        expected = 1000;
        actual = car.getPrice();
        expect(actual).toBe(expected);
      
    });

    test('getting the car engine type', () => {
        expected = 2000;
        actual = car.getManufacturer();
        expect(actual).toBe(expected);
      
    });

})