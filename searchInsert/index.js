/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, target) {
    let cariIndex;
    if(nums[0] > target) return 0
    cariIndex = nums.findIndex((num) => num == target);
    if (cariIndex == -1) {
        for ([index, num] of nums.entries()) {
            if (num < target && nums[index + 1] ? nums[index + 1] > target : true) {
                cariIndex = index + 1
                break;
            }
        }
    }
    return cariIndex;
}

console.log(searchInsert([1, 3, 5, 6],0));