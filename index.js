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
    if ((this.array[0] + this.array[1]) > this.array[2]) {
      return true
    } else {
      return false
    }
  }
  //console.log(this.array)
}

class Square extends Polygon {
  // inherits constructor from Pet
}
