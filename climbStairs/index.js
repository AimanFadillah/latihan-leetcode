/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    bilangan1 = 0;
    bilangan2 = 0;
    for(i = 1;i <= n;i++){
        hasil = (bilangan1 + bilangan2) == 0 ? 1 : bilangan1 + bilangan2;
        bilangan1 = bilangan2
        bilangan2 = hasil;
    }
    return bilangan1 + bilangan2
};


console.log(climbStairs(10));