class Person{
    constructor (name, height) {
        this.name = name;
        this.height = height
    }
    get ten () { // ten hoạt động như 1 function nhưng chỉ là 1 thuộc tính của Person. 
        return this.name // Phương thức get chỉ có thể trả về dữ liệu chứ ko thể in ra (phải có RETURN)
    }
    set tenmoi(ten){ // Gán giá trị mới cho thuộc tính name
        this.name = ten
    }
}

const nam = new Person('Hoang Nam', 180)
nam.tenmoi = 'Nam'; //set
console.log(nam.ten) //get