class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = ''

        for(let i in strs[0]){
            for (let word of strs){
                if (i === strs.length || word[i] !== strs[0][i]){
                    return res
                }
                
            } 
            res += strs[0][i]
        } 
        return res
    } 
}
