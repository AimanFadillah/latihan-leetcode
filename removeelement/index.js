/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
*/

function removeElement(nums, val) {
    for (i = 0;i < nums.length;i++) {
        if(nums[i] == val){
            nums.splice(i,1);
            i = i - 1;
        }
    }
    return nums.length
}

console.log(removeElement([3,2,2,3],3))