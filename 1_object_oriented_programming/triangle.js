class Triangle {
  constructor(height, sideA, sideB, sideC) {
    this.height = height;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  circumference() {
    return this.sideA + this.sideB + this.sideC;
  }

  area() {
    return (this.height * this.sideA) / 2;
  }
}

const triangle = new Triangle(10, 3, 3, 3);

console.log(triangle.circumference());
console.log(triangle.area());
