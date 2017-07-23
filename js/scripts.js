function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", size is " + this.size + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", '5,2"');
var samsungGalaxyS6 = new Phone("Samsung", 1980, "white", '5,5"');
var onePlusOne = new Phone("One Plus", 1730, "black", '5,2"');

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
