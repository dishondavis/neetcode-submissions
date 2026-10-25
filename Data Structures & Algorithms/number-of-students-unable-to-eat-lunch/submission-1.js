class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let n = students.length
        let q = []
        for(let student of students){
            q.push(student)
        }
        let res = n

        for(let sandwich of sandwiches){
            let cnt = 0
            while(cnt < n && q[0] !== sandwich){
                q.push(q.shift())
                cnt++
            }

            if(q[0] === sandwich){
                q.shift()
                res--
            } else
            break
        }
        return res

    }
}
