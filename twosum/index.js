/**
 * 
 * @param {Array} nums 
 * @param {integer} target 
 */

function twosum(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (t = 0; t < nums.length; t++) {
            if(i != t){
                if (nums[i] + nums[t] == target) {
                    return [i,t];
                }
            }
        }
    }
}

console.log(twosum([2, 7, 11, 15], 9));