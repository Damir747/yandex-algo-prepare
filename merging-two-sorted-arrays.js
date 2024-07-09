function mergingTwoSortedArrays(arr1, arr2) {
	let left1 = 0;
	let left2 = 0;
	const result = [];

	while (left1 < arr1.length && left2 < arr2.length) {
		if (arr1[left1] <= arr2[left2]) {
			result.push(arr1[left1]);
			left1++;
		} else {
			result.push(arr2[left2]);
			left2++;
		}
	}

	while (left1 < arr1.length) {
		result.push(arr1[left1]);
		left1++;
	}

	while (left2 < arr2.length) {
		result.push(arr2[left2]);
		left2++;
	}

	return result;
}

console.log(mergingTwoSortedArrays([1, 2, 3], [4, 5, 6, 7]));
console.log(mergingTwoSortedArrays([2, 4, 6], [1, 3, 5, 7]));
console.log(mergingTwoSortedArrays([], [4, 5, 6, 7]));
console.log(mergingTwoSortedArrays([1, 2, 3], []));
console.log(mergingTwoSortedArrays([], []));



