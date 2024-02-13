/**
 * @param {string} s
 * @return {boolean}
 */

function validparentheses(s) {
    const stringSplit = s.split("");
    const cariPenutup = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };
    let status = true;
    let pembuka = [];
    for (char of stringSplit) {
        if("({[".includes(char)){
            pembuka.push(char);
        }else if("]})".includes(char)){
            const markPembuka = pembuka[pembuka.length - 1];
            if(cariPenutup[markPembuka] !== char){
                status = false;
                break;
            }
            pembuka.pop();
        }
    }
    if(pembuka.length > 0) status = false;
    return status;
}

console.log(validparentheses("([])"));
