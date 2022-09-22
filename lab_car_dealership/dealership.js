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