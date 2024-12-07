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
  currentLocation: Point;
  locationMethod(point: Point): void {
    console.log("locationMethod worked");
  }
}

let car : Car = new Car();
car.locationMethod({x:1,y:2});