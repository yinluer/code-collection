/**
 * 题目：使用链表存储字符串，验证是否为回文字符串
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 * 解题思路
 * 使用快慢两个指针找到链表中点，慢指针每次前进一步，快指针每次
 * 前进两步。在慢指针前进的过程中，同时修改其 next 指针，使得
 * 链表前半部分反序。最后比较中点两侧的链表是否相等。
 */
function palindromeStr(head) {
  if (!head || !head.next) {
    return true;
  }
  let pre = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = pre;
    pre = slow;
    slow = next;
  }
  if (fast) {
    slow = slow.next;
  }
  while (slow) {
    if (slow.val !== pre.val) {
      return false;
    }
    slow = slow.next;
    pre = pre.next;
  }
  return true;
}