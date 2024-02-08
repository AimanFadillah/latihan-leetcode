/**
 * 
 * @param {integer} angka 
 */

function palindromenumber(angka) {
    const pembalik = parseInt((angka.toString()).split("").reverse().join(""));
    return angka == pembalik ? true : false;
}

console.log(palindromenumber(1000021));