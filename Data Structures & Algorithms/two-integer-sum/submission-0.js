class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
          const visited = new Map();

          for(let i = 0; i < nums.length; i++){
            const diff = target - nums[i]
            if(visited.has(diff)) {
                return [visited.get(diff), i]
            }
            visited.set(nums[i], i)
          }
    }

}