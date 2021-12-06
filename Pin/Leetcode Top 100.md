[1.pdf](https://github.com/exposir/personal-blog/files/7504394/1.pdf)
[2.pdf](https://github.com/exposir/personal-blog/files/7504395/2.pdf)
[3.pdf](https://github.com/exposir/personal-blog/files/7504400/3.pdf)

## 1. 两数之和

https://leetcode-cn.com/problems/two-sum/

给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那   两个   整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

```js
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 查找法

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

```js
// 哈希表
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
