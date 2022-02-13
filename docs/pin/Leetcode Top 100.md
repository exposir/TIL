# Leetcode Top 100

- [top100-1.pdf](https://cdn.jsdelivr.net/gh/exposir/beds@main/others/top100-1.pdf)
- [top100-2.pdf](https://cdn.jsdelivr.net/gh/exposir/beds@main/others/top100-2.pdf)
- [top100-3.pdf](https://cdn.jsdelivr.net/gh/exposir/beds@main/others/top100-3.pdf)

## 1. 两数之和

<https://leetcode-cn.com/problems/two-sum/>

给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

```md
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

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

![image](https://user-images.githubusercontent.com/33340988/140923907-434b5582-2fde-4636-8bf9-3a4c7e20da6c.png)

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

![image](https://user-images.githubusercontent.com/33340988/140925384-a8b422b3-a02b-477d-bfb3-8486490becab.png)

## 2.两数相加（链表）

<https://leetcode-cn.com/problems/add-two-numbers/submissions/>

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

### 方法一

```js
//执行用时：108 ms, 在所有 JavaScript 提交中击败了80.34%的用户
//内存消耗：46.3 MB, 在所有 JavaScript 提交中击败了7.72%的用户
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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
