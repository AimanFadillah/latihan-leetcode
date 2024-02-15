/**
 * @param {number[]} nums
 * @return {number}
 */


function removeduplicates(nums) {
    for ([index, num] of nums.entries()) {
        for (i = 0;i < nums.length;i++) {
            if (num == nums[i] && index != i) {
                nums.splice(i,1);
                i = i - 1;
            }
        }
    }
    return nums.length;
}

