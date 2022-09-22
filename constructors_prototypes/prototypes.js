// inheritance in JS is handled via prototypes
// to share behavior with a sub-type, we must put those behavior in the prototype, instead of the constructor
// when adding methods to prototypes, use function expressions rather than arrow functions

const Product = function(title, price) {
    this.title = title;
    this.price = price;
}

Product.prototype.getTitle = function() { return this.title};
Product.prototype.setTitle = function(title) { this.title = title };
Product.prototype.setPrice = function(price) { this.price = price };
Product.prototype.getPrice = function() { return this.price };

const product1 = new Product('Sweeping Brush PDF', 20);
console.log(product1.getTitle());

const PhysicalProduct = function(title, price, weight) {
    this.title = title;
    this.price = price;
    this.weight = weight;
}
PhysicalProduct.prototype.getWeight = function() { return this.weight}
PhysicalProduct.prototype.setWeight = function(weight) { this.weight = weight }

// first param is the sub-type, second param is the super
Object.setPrototypeOf(PhysicalProduct.prototype, Product.prototype);

const physProduct1 = new PhysicalProduct('Sweeping Brush', 100, 1);
//console.log(Object.getPrototypeOf(physProduct1));
console.log('price of brush: ', physProduct1.getPrice());
console.log('weight of brush: ', physProduct1.getWeight());