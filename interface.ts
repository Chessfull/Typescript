interface Point {
  x: number;
  y: number;
}

// -> Working like oop interface logic oop
interface Vehicle {
  currentLocation: Point;
  locationMethod(point: Point): void;
}

class Car implements Vehicle {
  constructor(private location: Point, private firm: String) {}

  currentLocation: Point;
  locationMethod(): void {
    console.log(`Location - X: ${this.location.x }, Y: ${this.location.y}, Firm: ${this.firm}`);
  }
}

let car: Car = new Car({ x: 1, y: 2 },"MertCar");
car.locationMethod();