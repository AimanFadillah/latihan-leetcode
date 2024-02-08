/**
 * 
 * @param {string} roman 
 */


function romantointeger(roman) {
    const rumusRoman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let result = 0;
    let romans = roman.split("");
    let filter = [];
    for (i = 0; i < romans.length; i++) {
        const next = romans[i + 1];
        const combane = romans[i] + next
        if (romans[i] === "I" && next === "V" || romans[i] === "I" && next === "X") {
            filter.push(combane);
            romans.splice(i + 1, 1)
        } else if (romans[i] === "X" && next === "L" || romans[i] === "X" && next === "C") {
            filter.push(combane);
            romans.splice(i + 1, 1)

        } else if (romans[i] === "C" && next === "D" || romans[i] === "C" && next === "M") {
            filter.push(combane);
            romans.splice(i + 1, 1)
        } else {
            filter.push(romans[i]);
        };
    }
    filter.forEach(roman => result = result + rumusRoman[roman]);
    return result;
}

console.log(romantointeger("IV"));

