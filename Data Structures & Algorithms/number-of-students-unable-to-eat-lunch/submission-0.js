class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let res = students.length
        let cnt = new Int32Array(2)
        for(let student of students){
            cnt[student]++
        }
       

         for(let s of sandwiches){
            if(cnt[s] > 0){
                cnt[s]--
                
                res--
                
            } else {
                break;
            }
        } console.log(cnt)
            return res
        
    }

   


}
