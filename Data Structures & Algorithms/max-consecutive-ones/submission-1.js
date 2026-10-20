class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0
        let res = 0

        for(let i of nums){
            count = 1 === i ? count + 1 : 0
            res = Math.max(res, count)

        }
        return res
    }
}
