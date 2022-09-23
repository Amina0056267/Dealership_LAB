const Car = function (manufacturer, price, engineType){
    this._manufacturer = manufacturer;
    this._price = price;
    this._engineType = engineType;

    module.exports = Car;

    this.getManufacturer = ()=> _manufacturer;
    this.setManufacturer = (manufacturer)=> _manufacturer = manufacturer;
    this.getPrice = ()=> _price;
    this.setPrice = (price)=> _price = price;
    this.getEngineType = ()=> _engineType;
    this.setEngineType = (engineType)=> _engineType = engineType;

}
module.exports = Car ;

const car1 = new Car ('BMW', 1000, 2000);
    const Audi = new Car('Audi', 1000, 2000);
    console.log(BMW.getManufacturer());
    console.log(Audi.getManufacturer());







