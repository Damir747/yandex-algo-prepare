function containsDuplicate(arr) {
	return new Set(arr).size !== arr.length;
}