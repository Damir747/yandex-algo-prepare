function removeDuplicates(arr) {
	let right = 0;
	for (let left = 0; left < arr.length; left++) {
		while (arr[left] === arr[right]) {
			right++;
		}
		arr[left] = arr[right];
	}
}