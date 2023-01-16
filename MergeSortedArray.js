// Problem-2 Merge Shorted Array

// This function takes four parameters:

// nums1: the first array that needs to be merged
// m: the number of elements in nums1
// nums2: the second array that needs to be merged
// n: the number of elements in nums2

var merge = function (nums1, m, nums2, n) {
  let i, j, k;

  for (i = m - 1, j = n - 1, k = m + n - 1; i >= 0 && j >= 0; k--) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
  }

  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
