/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function strStr(haystack, needle) {
    const haystackArray = haystack.split("");
    const needleArray = needle.split("");
    let getIndex;
    for ([i, char] of haystackArray.entries()) {
        if (char == needleArray[0]) {
            const pecahan = haystackArray.slice(i, i + needleArray.length)
            if(pecahan.join("") === needle){
                getIndex = i;
                break
            }
        }
    }
    return getIndex != undefined ? getIndex : -1;
}

console.log(strStr("sadbutsad", "sad"));