/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

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

function mergetwolists(list1, list2) {
    list1 = listToArray(list1);
    list2 = listToArray(list2);
    const angkaAcak = list1.concat(list2);
    const angkaSusun = [];
    let checkAngka ;
    for (acak of angkaAcak) {
        checkAngka = acak;
        for ([index, susun] of angkaSusun.entries()) {
            if (susun >= acak) {
                angkaSusun.splice(index, 0, acak);
                checkAngka = undefined;
                break;
            }
        }
        if(checkAngka != undefined){
            angkaSusun.push(acak);
        }
    }

    return arrayToList(angkaSusun);
}

const list1 = arrayToList([]);
const list2 = arrayToList([0]);

console.log(listToArray(mergetwolists(list1, list2)));