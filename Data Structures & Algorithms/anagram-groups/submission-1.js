class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for(let word of strs) {

            const hashKey = new Array(26).fill(0)

            for (let letter of word) {
                hashKey[letter.charCodeAt(0) - 97]++
                
            }

            const sHash = hashKey.toString()

            

            if(!map.has(sHash)){
                map.set(sHash, [])
            } 

            map.get(sHash).push(word)
        }

        return [...map.values()]
    }
}
