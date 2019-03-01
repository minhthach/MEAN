// Bài toán so sánh độ dài 2 đoạn thẳng

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
class Line {
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }
    get Lenght() {
        return Math.sqrt( Math.pow( this.pointA.x - this.pointB.x, 2 ) + Math.pow( this.pointA.y - this.pointB.y, 2 ))
    }
    static compare (d1, d2) { // class Line có thể gọi phương thức compare nhanh hơn,
        // trong khi đó L1, L2 ko thể gọi được hàm compare, tương tự hàm Math. Tạo tiện ích cho Class
        return d1.Lenght > d2.Lenght ? 'd1 is longer than d2' : 'd2 is longer than d1'
    }
}

const A = new Point(1,1);
const B = new Point(2,2);
const L1 = new Line(A, B);

const C = new Point(3,3);
const D = new Point(0,0);
const L2 = new Line(C, D);

// function compare (d1, d2) {
//     return d1.Lenght > d2.Lenght ? 'd1 is longer than d2' : 'd2 is longer than d1'
// }
// console.log(compare(L1, L2))

console.log(Line.compare(L1, L2))
