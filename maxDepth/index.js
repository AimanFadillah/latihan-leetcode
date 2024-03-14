function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    let count = 0;
    let max = 0;
    let main = root;
    let induk = [];
    if (main == undefined) return 0;
    while (true) {
        console.log(main)
        if (main.left != null) {
            let newInduk = main;
            main = main.left;
            newInduk.left = null
            induk.push(newInduk)
            count++
        } else if (main.right != null) {
            let newInduk = main;
            main = main.right;
            newInduk.right = null
            induk.push(newInduk)
            count++
        } else if (main.left == null && main.right == null && induk.length > 0) {
            main = induk.pop();
            if (count > max) {
                max = count
            }
            count--
        } else {
            break
        }
    }
    return max + 1;
};

// console.log(
//     maxDepth(new TreeNode(3,
//         new TreeNode(9),
//         new TreeNode(20,
//             new TreeNode(15),
//             new TreeNode(7)
//         )
//     ))
// );

// console.log(
//     maxDepth(new TreeNode(1,
//         null,
//         new TreeNode(2)
//     ))
// )

// console.log(maxDepth(new TreeNode(0)))
