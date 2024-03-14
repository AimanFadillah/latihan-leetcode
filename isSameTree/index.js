function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function inorderTraversal(root) {
    let main = root
    let induk = [];
    let data = []
    let i = 0;
    if (main == undefined) return []
    if (main.val == null) return data
    if (!main.left && !main.right) return [main.val]

    while (main) {
        if (main.left != null) {
            data.push(main.val)
            induk.push(main);
            main = main.left
        } else if (main.left == null) {
            data.push(main.val)
            if (main.right != null) {
                data.push(null)
                main = main.right
            } else if (induk.length > 0) {
                let newMain = induk[induk.length - 1];
                newMain.left = null
                main = newMain;
                induk.pop()
            } else {
                break
            }
        }
    }

    return data;
};


function isSameTree(p, q) {
    const array1 = inorderTraversal(p)
    const array2 = inorderTraversal(q)
    return JSON.stringify(array1) === JSON.stringify(array2) ? true : false
};

console.log(inorderTraversal(
    new TreeNode(5,
        new TreeNode(4,
            null,
            new TreeNode(1,
                new TreeNode(2)
            )
        ),
        new TreeNode(1,
            null,
            new TreeNode(4,
                new TreeNode(2)
            )))))

console.log(inorderTraversal(
    new TreeNode(5,
        new TreeNode(1,
            new TreeNode(4,
                null,
                new TreeNode(2)
            )
        ),
        new TreeNode(4,
            new TreeNode(1,
                null,
                new TreeNode(2)
            )
        ))))

