class MyStack {
    constructor() {
        this.q = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        for(let i = this.q.length; i > 1; i--){
            this.q.push(this.q.shift())
        }
        return this.q.shift()
    }

    /**
     * @return {number}
     */
    top() {
        for(let i = this.q.length; i > 1; i--){
            this.q.push(this.q.shift())
        }
        let remove = this.q.shift()
            this.q.push(remove)
            return remove
        
    }

    /**
     * @return {boolean}
     */
    empty() {
        if(this.q.length === 0){
            return true
        } else
        return false
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
