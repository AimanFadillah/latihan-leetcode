function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function arrayToList(arrayData) {
    const hasil = new ListNode(arrayData[0]);
    const nampungNode = [hasil];
    for (i = 0; i < arrayData.length - 1; i++) {
        nampungNode[i + 1] = new ListNode(arrayData[i + 1]);
        nampungNode[i].next = nampungNode[i + 1];
    }

    return arrayData.length == 0 ? null : hasil;
}

function listToArray(nodeData) {
    const hasil = [];

    while (nodeData != null) {
        hasil.push(nodeData.val);
        nodeData = nodeData.next
    }

    return hasil;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    const nums = listToArray(head);
    for ([index, num] of nums.entries()) {
        for (i = 0; i < nums.length; i++) {
            if (num == nums[i] && index != i) {
                nums.splice(i, 1);
                i = i - 1;
            }
        }
    }
    return arrayToList(nums)
};

const head = arrayToList([1, 1, 2, 3, 3]);

console.log(deleteDuplicates(head));