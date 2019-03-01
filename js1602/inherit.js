const file = require('./BTclass');
const Line = file.Line;
const Point = file.Point;

class NewLine extends Line { // Class NewLine kế thừa toàn bộ thuộc tính, phương thức của class Line
    static compare (d1, d2) { 
        return d1.Lenght > d2.Lenght ? 'd1 is longer than d2' : 'd2 is longer than d1'
    }
    // class Line là class CHA, class NewLine là class CON
}

const A = new Point(1,1);
const B = new Point(2,2);
const L1 = new NewLine(A, B);

const C = new Point(3,3);
const D = new Point(0,0);
const L2 = new NewLine(C, D);

console.log(NewLine.compare(L1, L2))
console.log(L1.pointA.x)
