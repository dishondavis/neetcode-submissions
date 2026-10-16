class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        for(let ops of operations){
            if(ops === '+'){
             stack.push(stack[stack.length -1] + stack[stack.length - 2])
            }else if(ops === 'D'){  
                stack.push(stack[stack.length -1] * 2)
            }else if (ops === 'C'){ 
                stack.pop()
            }else {
            stack.push(Number(ops))
            }
        }
        return stack.reduce((sum,num) => {
            return sum + num
        },0) 
    }
}
