# Leetcode Top 100

- [top100-1.pdf](https://cdn.jsdelivr.net/gh/exposir/beds@main/others/top100-1.pdf)
- [top100-2.pdf](https://cdn.jsdelivr.net/gh/exposir/beds@main/others/top100-2.pdf)
- [top100-3.pdf](https://cdn.jsdelivr.net/gh/exposir/beds@main/others/top100-3.pdf)

## [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

### 查找法

```js
const twoSum = (nums, target) => {
  const arr = [];
  nums.forEach((item, index) => {
    const sub = target - item;
    nums[index] = "";
    const next = nums.indexOf(sub);
    if (next > 0 && next !== index && !arr.length) {
      arr.push(index, next);
    }
  });
  console.log(arr);
  return arr;
};
```

### 哈希表

```js
// 注意 undefined、0

const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] !== undefined) {
      console.log(map[num], i);
      return [map[num], i];
    }
    map[target - num] = i;
  }
};
```

## [2.两数相加（链表）](https://leetcode-cn.com/problems/add-two-numbers/submission)

### 方法一

```js
//执行用时：108 ms, 在所有 JavaScript 提交中击败了80.34%的用户
//内存消耗：46.3 MB, 在所有 JavaScript 提交中击败了7.72%的用户

var addTwoNumbers = function (l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let l3 = new ListNode();
    let p3 = l3;
    let tmp = 0;
    while (p1 && p2) {
        p3.next = new ListNode((p1.val + p2.val + tmp) % 10)
        p3 = p3.next;
        tmp = (p1.val + p2.val + tmp - p3.val) / 10
        p1 = p1.next;
        p2 = p2.next;
    }
    // l1还有元素未遍历
    while (p1) {
        p3.next = new ListNode((p1.val + tmp) % 10)
        p3 = p3.next;
        tmp = (p1.val + tmp - p3.val) / 10
        p1 = p1.next;

    }
    // l2还有元素未遍历
    while (p2) {
        p3.next = new ListNode((p2.val + tmp) % 10)
        p3 = p3.next;
        tmp = (p2.val + tmp - p3.val) / 10
        p2 = p2.next;

    }
    if (tmp > 0) {
        p3.next = new ListNode(tmp)
        p3 = p3.next;
    }
    l3 = l3.next
    return l3;
};
```

### 方法二

```js
// 执行用时：88 ms, 在所有 JavaScript 提交中击败了98.48%的用户
// 内存消耗：45.9 MB, 在所有 JavaScript 提交中击败了13.18%的用户

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode()
    let curr = dummy
    let carry = 0
    while (l1 || l2) {
        const x = l1 ? l1.val : 0
        const y = l2 ? l2.val : 0

        const total = x + y + carry
        curr.next = new ListNode(total % 10)
        curr = curr.next
        carry = Math.floor(total / 10)

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carry) curr.next = new ListNode(carry)
    return dummy.next
};
```
