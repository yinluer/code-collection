/**
 * 二分查找
 */
function bSearch(a, n, value) {
  let low = 0;
  let high = n - 1;
  while (low <= high) { // 循环条件
    let mid = low + Math.floor((high - low) / 2); // mid取值
    if (a[mid] === value) {
      return mid;
    } else if (a[mid] > value) {
      high = mid - 1; // 分界点
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
console.log(bSearch([1,3,4,6,7], 5, 4));

/**
 * 查找第一个值等于给定值的元素
 */
function bSearchFirst (a, n, value) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] > value) {
      high = mid - 1;
    } else if (a[mid] < value) {
      low = mid + 1;
    } else {
      if (mid === 0 || a[mid - 1] !== value) return mid;
      high = mid - 1;
    }
  }
  return -1;
}
console.log(bSearchFirst([1,3,4,6,6,7], 6, 6));

/**
 * 查找第一个大于等于给定值的元素
 */
function bSearchFirstBigger (a, n, value) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] >= value) {
      if (mid === 0 || a[mid - 1] < value) return mid;
      high = mid - 1;
    } else if (a[mid] < value) {
      low = mid + 1;
    }
  }
  return -1;
}
console.log(bSearchFirstBigger([3, 4, 6, 7, 10], 5, 5));