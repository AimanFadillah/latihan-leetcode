/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
    const angka = BigInt(digits.join(""));
    const plus = (angka + BigInt(1)).toString();
    return plus.split("").map((data) => parseInt(data));
}

console.log(plusOne([1,2,3]))