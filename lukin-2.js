function findSumTwoPointers(arr, target) {

	let left = 0;
	let right = arr.length - 1;
	let diff = Infinity;
	let diffArr = [];

	while (left < right) {
		if (arr[left] + arr[right] === target) {
			return [arr[left], arr[right]];
		}

		const tempDiff = Math.abs(target - (arr[left] + arr[right]));
		if (tempDiff < diff) {
			diff = tempDiff;
			diffArr = [arr[left], arr[right]];
		}

		if (arr[left] + arr[right] < target) {
			left++;
		} else {
			right--;
		}
	}

	return 'Ближайший: [ ' + diffArr[0] + ', ' + diffArr[1] + ' ]';
}

console.log(findSumTwoPointers([-3, 0, 2, 4, 5], 6));
console.log(findSumTwoPointers([1, 2, 3, 4, 5], 29));

// https://www.youtube.com/watch?v=JtMuXmmDl9s&list=WL&index=43