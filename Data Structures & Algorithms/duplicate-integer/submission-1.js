class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */ 
    // Iterate through the array to check for any dublicates
    // If any duplicates are found return true
    hasDuplicate(nums) {
        let seen = new Set()
        for (let i of nums){
            if(seen.has(i))
             return true
            seen.add(i)
        } return false
    }

}
