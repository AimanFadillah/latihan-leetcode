function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    let main = root
    let induk = [];
    let data = []
    let i = 0;
    if (!main || !main.val) return data
    if (!main.left && !main.right) return [main.val]

    while (main) {
        if (main.left != null) {
            induk.push(main);
            main = main.left
        }else if (main.left == null) {
            data.push(main.val)
            if (main.right != null) {
                main = main.right
            } else if (induk.length > 0) {
                let newMain = induk[induk.length - 1];
                newMain.left = null
                main = newMain;
                induk.pop()
            }else{
                break
            }
        }
    }

    return data;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));

console.log(inorderTraversal(root));















