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


    const engineType = function (thermal, electrical){
        let _thermal = thermal;
        let _electrical = electrical;

        this.getThermal = ()=> _thermal;
        this.setThermal = (thermal)=> _thermal = thermal;
        this.getElectrical = ()=> _electrical;
        this.setElectrical = (electrical)=> _electrical = electrical;
    }

   




    const BMW = new Car ('BMW');
    const Audi = new Car('Audi');
    console.log(BMW.getManufacturer());
    console.log(Audi.getManufacturer());


}




