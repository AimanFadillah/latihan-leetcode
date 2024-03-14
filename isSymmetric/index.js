function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function inorderTraversalLeft(root) {
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

function inorderTraversalRight(root) {
    let main = root
    let induk = [];
    let data = []
    let i = 0;
    if (main == undefined) return []
    if (main.val == null) return data
    if (!main.left && !main.right) return [main.val]

    while (main) {
        if (main.right != null) {
            data.push(main.val)
            induk.push(main);
            main = main.right
        } else if (main.right == null) {
            data.push(main.val)
            if (main.left != null) {
                data.push(null)
                main = main.left
            } else if (induk.length > 0) {
                let newMain = induk[induk.length - 1];
                newMain.right = null
                main = newMain;
                induk.pop()
            } else {
                break
            }
        }
    }

    return data;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    let mainLeft = root.left || null;
    let mainRight = root.right || null;
    const array1 = inorderTraversalLeft(mainLeft);
    const array2 = inorderTraversalRight(mainRight);
    console.log(array1)
    console.log(array2)
    return JSON.stringify(array1) === JSON.stringify(array2) ? true : false;
};

console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))))