class ListNode {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0)
        this.tail = new ListNode(0)
        this.tail.prev = this.head
        this.head.next = this.tail
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head.next
        while(cur && index > 0){
            cur = cur.next
            index--
        }
        if(cur && cur !== this.tail && index === 0){
            return cur.val
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new ListNode(val)
        const next = this.head.next, prev = this.head
        prev.next = newNode
        next.prev = newNode
        newNode.next = next
        newNode.prev = prev
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new ListNode(val)
        const next = this.tail, prev = this.tail.prev
        prev.next = newNode
        next.prev = newNode
        newNode.next = next
        newNode.prev = prev
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
         let cur = this.head.next
        while(cur && index > 0){
            cur = cur.next
            index--
    }
    if(cur && index === 0){
        const newNode = new ListNode(val)
        const next = cur
        const prev = cur.prev
         prev.next = newNode
        next.prev = newNode
        newNode.next = next
        newNode.prev = prev
        }
    }
    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        let cur = this.head.next
        while(cur && index > 0){
            cur = cur.next
            index--
    }
     if(cur && cur !== this.tail && index === 0){
        const next = cur.next
        const prev = cur.prev
        next.prev = prev
        prev.next = next
        

        }
     }
    }
