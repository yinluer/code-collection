// 插入排序
// 前面是有序序列，从后面依次拿出一个和有序序列比较
// 时间复杂度N2
function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let target = i;
    for (let j = i - 1; j >=0; j--) {
      if (array[target] < array[j]) {
        [array[target], array[j]] = [array[j], array[target]];
        target = j;
      } else {
        break;
      }
    }
  }
  return array;
}
console.log(insertSort([3,2,5,1,8]));


// 冒泡排序
// 循环数组，比较当前元素和下一个元素，大的元素冒泡到后面
// 时间复杂度 N2
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let complete = true;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        complete = false;
      }
    }
    if (complete) {
      break;
    }
  }
  return array;
}
console.log(bubbleSort([3,2,5,1,8]));


// 选择排序
// 循环，每次找出最小的数和当前位置交换
// 时间复杂度 N2
function selectSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
  return array;
}
console.log(selectSort([3,1,3,4,7,2]));


// 快排排序
// 递归，选取第一个为目标元素，每次比目标元素小的放在左边，大的放在右边
// 时间复杂度 NlogN
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let target = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(target).concat(quickSort(right));
}
console.log(quickSort([3,1,3,4,7,2]));

// 归并排序
// 递归，分治。将数组拆分，再合并
// 时间复杂度 NlogN
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    let temp = [];
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        temp.push(right.shift());
      } else {
        temp.push(left.shift());
      }
    }
    while (left.length) {
      temp.push(left.shift());
    }
    while (right.length) {
      temp.push(right.shift());
    }
    return temp;
  }
}
console.log(mergeSort([3,2,5,1,8]));


// 冒泡 选择 插入
// 归并 快速