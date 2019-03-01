let n = 3456;

let arrNum = [];

for (let i=0;i < n+1;i++) {
    arrNum.push(i);
}

let loc = arrNum.filter(number=> number % 123 == 0);
//let dem = loc.length;
console.log(`Co ${loc.length} so chia het cho 123. Cac phan tu do la:`);
console.log(loc);