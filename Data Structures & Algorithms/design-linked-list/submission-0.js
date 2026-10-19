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
        this.head.next = this.tail
        this.tail.prev = this.head
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
        if (cur && cur !== this.tail && index === 0){
             return cur.val
        }
       return -1
    }


    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const node = new ListNode(val)
        const next = this.head.next, prev = this.head
        prev.next = node
        next.prev = node
        node.next = next
        node.prev = prev
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const node = new ListNode(val)
        const next = this.tail, prev = this.tail.prev
        prev.next = node
        next.prev = node
        node.next = next
        node.prev = prev
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(i, val) {
        let cur = this.head.next
        while (cur && i > 0){
            cur = cur.next
            i--
        }
        if(cur && i === 0){
            const node = new ListNode(val)
            const next = cur
            const prev = cur.prev
            prev.next = node
            next.prev = node
            node.next = next
            node.prev = prev
        }

    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(i) {
         let cur = this.head.next
        while (cur && i > 0){
            cur = cur.next
            i--
        }
        if(cur && i === 0 && cur !== this.tail){
            const next = cur.next
            const prev = cur.prev
            next.prev = prev
            prev.next = next
           
        }
    }
}
