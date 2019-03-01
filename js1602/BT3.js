/**
 * In ra dãy các số chia hết cho 2
 * không chia hết cho 2
 * chia het cho 3 dư 1
 */
// function yc(n) {
//     for (i=0; i < n+1; i++){
//         if(n%2 == 0){
//             n = sochan;
//         } 
//         if (n%2 != 0) {
//             n = sole;
//         }
//         if (n%3 ==1 ){
//             n = sokhac;
//         }
//     }
// }

// function inSo(n,dk) {
//     for (let i=0; i <= n; i++){
//         const check = dk(i);
//         if (check) console.log(i)
//     }
// }

// function kiemTraSoChan(n) {
//     return n%2 == 0
// }

// //inSo(100,kiemTraSoChan) // Trong hàm inSo dk == kiemTraSoChan  ==> check = kiemTraSoChan(i)

// function kiemTraSoLe(n) {
//     return n%2 != 0
// }

// inSo(100,kiemTraSoLe) 

// function inSo(n,soChia, soDu) {
//     for (let i=0; i <= n; i++){
//         const check = i%soChia == soDu;
//         if (check) console.log(i)
//     }
// }
// inSo(100,3,1)