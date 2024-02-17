/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    if(x == 0) return undefined
    let angkaSebelum;
    let checkAngka = 1;
    let i = 1;
    while(x >= checkAngka){
        checkAngka = i * i;
        angkaSebelum = i - 1;
        i++
    }
    return angkaSebelum
};

console.log(mySqrt(2));