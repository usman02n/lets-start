function createCar(manufacturer, model, color, feature) {
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
        color: color,
    };
    if (feature) {
        carInfo.feature = feature;
    }
    return carInfo;
}
var car1 = createCar("Toyota", "Camry", "Blue", "Sunroof");
var car2 = createCar("Honda", "Civic", "Red");
var car3 = createCar("Ford", "Mustang", "Black", "Leather Seats");
console.log(car1);
console.log(car2);
console.log(car3);
