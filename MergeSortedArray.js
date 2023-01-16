// Problem-2 Merge Shorted Array

// This function takes four parameters:

// nums1: the first array that needs to be merged
// m: the number of elements in nums1
// nums2: the second array that needs to be merged
// n: the number of elements in nums2

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}
