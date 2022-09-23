const Car = require("./car");

const Dealership = function (name){
    let _name = name;
    let _MaximumCar = MaximumCar;
    let _InStock = [];

    this.getName = ()=> _name;
    this.setName = (name)=> _name = name;
    this.getMaximumCar = ()=> _MaximumCar;
    this.setMaximumCar = (MaximumCar)=> _MaximumCar = MaximumCar;
    this.getInStock = ()=> _InStock;
    this.setInStock = (InStock)=> _InStock = InStock;
}

dealership.add(new Car("", 10, ""));
expect (dealership.count()).toBe(1);

let cars = [new Car("", 10,""), new Car("", 10,"")];
let dealership = new Dealership("tes1", 2);



Dealership.prototype.maufacturer = function(){
    return this.cars.map( (car) => car.manufacturer)
}