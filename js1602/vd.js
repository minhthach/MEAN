//console.log(b);
// JS chạy code bất đồng bộ (các dòng code chạy đồng thời - dòng trên chưa có kq, dòng sau cần kq dòng trước để chạy --> lỗi)

var a = 'string'; // Có thể có hoặc không dấu ;

let b = 12; // Nên dùng thay var. Khi gặp lỗi sẽ dừng toàn bộ chương trình, tránh lỗi logic

const pi =3.14 //Khai báo module - không thay đổi

console.log(pi);
console.log(b);

let arrName = ['Teo' , 'Ti', 'Nam'] // Không có dạng key => value như các ngôn ngữ khác. Mảng trong JS là Object
// Vị trí: 0 1 2
console.log(arrName[1]);
//Thêm phần tử vào mảng
arrName.push('Hoa');
arrName['key'] = 'Bong';
console.log(typeof arrName); // Xem kiểu dữ liệu
// Kiểm tra kiểu dữ liệu
Array.isArray(arrName);

/** Các kiểu dữ liệu
 *  string
 *  nummber
 *  array
 *  object
 *  boolean
 *  undefined
 *  null
 * */ 
/** 6 trường hợp trả về false
 * ''
 * 0
 * null - object không có giá trị
 * false
 * undefined
 * NaN
 */