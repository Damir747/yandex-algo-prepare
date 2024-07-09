function findMultiplyTarget(arr, target) {
	if (arr.length < 2) {
		return [];
	};
	const obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			const diff = target / arr[i];
			if (obj.hasOwnProperty(diff)) {
				return [obj[diff], i];
			} else {
				obj[arr[i]] = i;
			}
		} else {
			if (target === 0) {
				if (i > 0) {
					return [i - 1, i];
				}
				return [i, i + 1];
			}
		}

	}
	return [];
}
console.log(findMultiplyTarget([2, 4, 6, 8], 16));
console.log(findMultiplyTarget([2, 3], 48));