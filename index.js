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

    if (arrayLength === 3) {
      let sideOne = this.array[0];
      let sideTwo = this.array[1];
      let sideThree = this.array[2];

      if ((sideOne + sideTwo) > sideThree) {
        return true;
      } else if ((sideOne + sideThree) > sideTwo) {
        return true;
      } else if ((sideTwo + sideThree) > sideOne) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}

class Square extends Polygon {
  // inherits constructor from Pet
}
