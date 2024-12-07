var Car = /** @class */ (function () {
    function Car(location, firm) {
        this.location = location;
        this.firm = firm;
    }
    Car.prototype.locationMethod = function () {
        console.log("Location - X: ".concat(this.location.x, ", Y: ").concat(this.location.y, ", Firm: ").concat(this.firm));
    };
    return Car;
}());
var car = new Car({ x: 1, y: 2 }, "MertCar");
car.locationMethod();
