// Задача.Дан массив из NN целых чисел arr.Найдите длину максимальной возрастающей подпоследовательности в этом массиве.Например, при
// arr = [2, 3, 6, 4, 1, 3, 5, 4, 7] искомая подпоследовательность —
// [2, 3, 4, 5, 7] и поэтому ответ равен 5.

function dp1(arr) {
	const dp = new Array(arr.length).fill(0);
	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			dp[i] = 1;
		}
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}
	return Math.max(...dp);
};

console.log(dp1([2, 3, 6, 4, 1, 3, 5, 4, 7]));