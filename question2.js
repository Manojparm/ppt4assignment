function findMissingDistinct(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const notInNums2 = [];
    const notInNums1 = [];
  
    for (let num of set1) {
      if (!set2.has(num)) {
        notInNums2.push(num);
      }
    }
  
    for (let num of set2) {
      if (!set1.has(num)) {
        notInNums1.push(num);
      }
    }
  
    return [notInNums1, notInNums2];
  }
  
  // Example usage
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  
  const missingDistinct = findMissingDistinct(nums1, nums2);
  console.log(missingDistinct); // Output: [[4, 6], [1, 3]]
  