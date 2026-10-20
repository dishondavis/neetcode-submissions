class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let c = {
            ')': '(',
            '}':'{',
            ']':'['
        }
        let stack = []
        for (let char of s){
            if(stack.length !== 0 && stack[stack.length-1] === c[char]){
                stack.pop()
            } else
            stack.push(char)
        }
        return !stack.length
    }
}
