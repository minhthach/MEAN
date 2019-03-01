/** Cho biến h = 5. Vẽ các hình sau bằng 1 function:
* * 
  * *
  * * *
  * * * *
  * * * * *
* 
  * * * * *
  * * * *
  * * *
  * * 
  * 
* 
*         *
*       * *
*     * * *
*   * * * *
* * * * * *
* 
*         *
*       * *
*     *   *
*   *     *
* * * * * *
 */


function inDauSao(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push('*')
    }
    let newArr = arr.reduce((a, b) => {
        return a + ' ' + b
    })
    console.log(newArr)
}

function inThuan(h) {
    for (let i = 1; i < h + 1; i++) {
        inDauSao(i)
    }
}

function inNghich(h) {
    for (let i = 1; i < h + 1; i++) {
        inDauSao(h + 1 - i)
    }
}

inThuan(5);
console.log(' ')
inNghich(5);
