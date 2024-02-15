/**
 * @param {string} s
 * @return {number}
 */

function lengthoflastword(s) {
    const textFilter = (s.replace(/\s+/g, ' ')).trim()
    const textEnd = textFilter.split(" ").pop();
    return textEnd.split("").length
}

console.log(lengthoflastword("luffy is still joyboy"));