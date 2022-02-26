class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    let sum = 0;
    
    for (let i = 0; i < this.array.length; i++) {
    sum += this.array[i];
  }
  return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let arrayLength = this.array.length
    const sideOne = this.array[0];
    const sideTwo = this.array[1];
    const sideThree = this.array[2];

    if (arrayLength === 3 && (sideOne + sideTwo) > sideThree && (sideOne + sideThree) > sideTwo && (sideTwo + sideThree) > sideOne) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let sideOne = this.array[0];
    let sideTwo = this.array[1];
    let sideThree = this.array[2];
    let sideFour = this.array[3];

    if (sideOne === sideTwo && sideOne === sideTwo && sideThree === sideFour) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    let sideOne = this.array[0];
    return sideOne * sideOne;
  }
}
