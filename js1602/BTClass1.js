const Point = require('./BTclass.js').Point;
const Line = require('./BTclass.js').Line;

/**
 * Tính chu vi tam giác
 */

class Triangle {
    constructor (A, B, C) {
        this.pointA = A;
        this.pointB = B;
        this.pointC = C;
    }
    get Perimeter (){
        const dAB = new Line(this.pointA, this.pointB).Lenght;
        const dAC = new Line(this.pointA, this.pointC).Lenght;
        const dBC = new Line(this.pointB, this.pointC).Lenght;
        return dAB + dAC + dBC
    }
}
const A = new Point(3,4);
const B = new Point(3,2);
const C = new Point(3,3);
const newTriangle = new Triangle(A, B, C);
console.log(`Chu vi tam giác ABC là ${newTriangle.Perimeter}`)
