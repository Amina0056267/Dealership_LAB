const Car = function (manufacturer){
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

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




