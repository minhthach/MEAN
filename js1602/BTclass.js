/**
 * Tính khoảng cách từ 1 điểm đến gốc tọa độ
 */

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    get Distance(){
        return Math.sqrt(this.x*this.x + this.y*this.y) 
    //  return Math.sqrt(Matt.pow(this.x,2) + Math.pow(this.y,2))
    }
}


/**
 * Tính khoảng cách giữa 2 điểm
 */

// function DistTwoPoint(A, B) {
//     let x1 = A.x;
//     let y1 = A.y;
//     let x2 = B.x;
//     let y2 = B.y;
//     dist = Math.sqrt( Math.pow(x2-x1,2) + Math.pow(y2-y1,2) );
//     console.log(dist)
// }
// const A = new Point(3,4)
// const B = new Point(2,2)
// DistTwoPoint(A,B)

class Line {
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }
    get Lenght() {
        return Math.sqrt( Math.pow( this.pointA.x - this.pointB.x, 2 ) + Math.pow( this.pointA.y - this.pointB.y, 2 ))
    }
}
// const A = new Point(3,4)
// const B = new Point(2,2)
// newLine = new Line(A,B)
// console.log(newLine.Lenght)

// Chuyển class từ file này sang file khác

module.exports = {Point, Line}
