/**
 * @param {string[]} strs
 * @return {string}
 */

function longestcommonprefix(strs) {
    let hasil = [];
    let stringPecah = strs[0].split("");
    let check = false
    for (i = 0; i < stringPecah.length; i++) {
        for (i2 = 0; i2 < strs.length; i2++) {
            if (stringPecah[i] == strs[i2].split("")[i]) {
                check = true;
            } else {
                check = false;
                break
            }
        }
        if (check) {
            hasil.push(stringPecah[i]);
        } else {
            break;
        }
    }
    return hasil.join("");
}

console.log(longestcommonprefix(["aaa","aa","aaa"]));