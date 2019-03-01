let arrName = ['Ti', 'Teo', 'Minh', 'Teo', 'An'];

for (let i = 0; i < arrName.length; i++){
    //console.log(arrName[i])
}
// Hàm cho mảng: map, fill, filter, pop, push, reduce, revers, slice, splice, shift, unshift

//arrName.map(name=>console.log(name))

//let a = (name)=>console.log(name);
//console.log(a);

// Fill: Điền vào mảng với vị trí bắt đầu và kết thúc

//arrName.fill('An'); // ['An', 'An', 'An', 'An']
//arrName.fill('An', 1, 2); //['Ti', 'An', 'An', 'Teo']

// Filter: Hàm lọc

//arrName.filter(name=>name==='Ti'); // ['Ti']

// Pop: Remove ra phần tử cuối cùng. Lấy ra giá trị chứ ko phải mảng. Mảng còn lại mất phần tử cuối

//console.log(arrName.pop());
//console.log(arrName);

// Slice: Remove ra phần tử ở vị trí bất kỳ trong mảng vs số lượng tùy chỉnh

// let newArr = arrName.slice(2,4); // Lấy ra vị trí số 2 và 3
// console.log(newArr);

// Shift: Lấy ra phần tử đầu tiên. Tương tự pop

// let newArr = arrName.shift();
// console.log(newArr);

// Unshift: Thêm vào mảng phần tử đầu tiên

// arrName.unshift('Nam', 'Nam2');
// console.log(arrName);

// Splice: Remove phần tử ở vị trí bất kỳ. Thay thế phần tử bị removed, hoặc thêm phần tử ở vị trí bất kỳ

// arrName.splice(2,0,'Nam','Nam1'); // Thêm
// console.log(arrName);

// Sort: sắp xếp mảng. Mặc định theo Unicode, đối với mảng chuỗi chỉ sắp xếp theo mặc định

//arrName.sort();

// Reverse: Đảo ngược thứ tự các phần tử.

//arrName.reverse();

// Kết hợp 2 hàm để sắp xếp descending

// arrName.sort().reverse();
// console.log(arrName);

// Reduce: tính dồn các phần tử trong mảng hoặc tính với giá trị bất kỳ

// let newArr = arrName.reduce((a,b)=>{
//     return a + ' ' + b
// })
// console.log(newArr)

// Sort

let arrNumber = [3, 19, 5, 66, 5, 65, 111];
// arrNumber.sort((a,b) => {
//     return b-a // Giảm
// //    return a-b // Tăng
// })
// console.log(arrNumber);

// IndexOf: Lấy ra vị trí phần tử

//let index = arrNumber.indexOf(5);
//console.log(index);

let index = arrNumber.lastIndexOf(5);// Vị trí phần tử khác trong mảng khi có 2 phần tử giống nhau
console.log(index);
