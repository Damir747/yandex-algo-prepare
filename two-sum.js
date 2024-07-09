function twoSum(arr, target) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		if (arr[left] + arr[right] === target) {
			return [left, right];
		}
		if (arr[left] + arr[right] < target) {
			left++;
		} else {
			right--;
		}
	}
	return [];
}
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Должно вывести [0, 1]
