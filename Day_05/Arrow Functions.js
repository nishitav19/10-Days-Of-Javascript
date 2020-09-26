/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = nums => {
    const newArray = nums.map(num => {
        if (num % 2 === 0) {
            return num = num * 2;
        }
        else {
            return num = num * 3;
        }
    })
    return newArray;
}