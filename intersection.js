function intersection(arr1, arr2) {
	const map1 = new Map();
	for (const el of arr1) {
		map1.set(el, (map1.get(el) || 0) + 1);
	}
	const result = [];
	for (const el of arr2) {
		if (map1.get(el) > 0) {
			result.push(el);
			map1.set(el, map1.get(el) - 1);
		}
	}
	return result;
}

console.log(intersection([1, 2, 3, 2], [1, 2, 3, 1, 2, 3]));
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([2, 2], [2, 2]));