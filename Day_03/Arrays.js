function getSecondLargest(nums) {
    // Complete the function
    const namedSet = new Set(nums);
    const uniqueNums = [...namedSet];
    console.log(uniqueNums[uniqueNums.length - 2]);
}
