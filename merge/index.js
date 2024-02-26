/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let jumlahkosong = 0;
    for (let i = m; i < nums1.length; i++) {
        if (nums1[i] == 0) {
            nums1.splice(i, 1);
            i--
            jumlahkosong++
        }
    }
    for ([index, num2] of nums2.entries()) {
        if (index >= jumlahkosong) {
            break
        }
        nums1.push(num2);
    }
    nums1.sort()
    return nums1;
};

console.log([1, 4, 5, 7, 8, 4, 3, -1, -4, -5].sort((a, b) => a - b))

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3))