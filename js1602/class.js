// const ti = {
//     name: 'Ti',
//     age: 22,
//     getName: function() {
//         console.log(this.name)
//     }
// }

// class Person {
//     constructor () {
//         this.name = 'Ti' // Có thể có hoặc không dấu ,
//         this.age = 22
//     }
// }
// const ti = new Person;
// console.log(ti)

// Truyền tham số vào constructor từ bên ngoài

// class Person {
//     constructor (ten, tuoi) {
//         this.name = ten
//         this.age = tuoi
//     }
// }

// const ti = new Person('Ti Nguyen', 20);
// console.log(ti)

// Thêm phương thức
// class Person {
//     constructor (ten, tuoi) { // Constructor chỉ nên để khai báo thuộc tính Class. Nên thêm phương thức ở ngoài Constructor
//         this.name = ten
//         this.age = tuoi
//         // this.getName = function (){
//         //     console.log(this.name)
//         // }
//     }
//     getName (){
//         console.log(this.name)
//     }
//     setName (tenmoi){
//         this.name = tenmoi;
//     }
// }
// const ti = new Person('Ti Nguyen', 22)
// // Thay đổi thuộc tính của Person
// //ti.name = 'Tí'; 
// // Hoặc thêm phương thức setname
// ti.setName('Nguyễn Tí')
// ti.getName()

// Thêm object vào Class
class Person {
    constructor (ten, tuoi, truonghoc) { // Constructor chỉ nên để khai báo thuộc tính Class. Nên thêm phương thức ở ngoài Constructor
        this.name = ten
        this.age = tuoi
        this.school = truonghoc
    }
    getName (){
        console.log(this.name)
    }
    setName (tenmoi){
        this.name = tenmoi;
    }
    gotoSchool() {
        console.log(`${this.name} đang học tại ${this.school.name}`)
    }
}

const school = {
    name: 'KPT',
    address: 'Charminton'
}
const ti = new Person ('Tí Nguyễn', 22, school);
ti.gotoSchool()

// Tham số default 
// class Person {
//     constructor (ten, tuoi = 22) {
//         this.name = ten
//         this.age = tuoi
//     }
// }