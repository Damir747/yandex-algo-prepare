// Алгоритм Евклида
// https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%95%D0%B2%D0%BA%D0%BB%D0%B8%D0%B4%D0%B0#%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%95%D0%B2%D0%BA%D0%BB%D0%B8%D0%B4%D0%B0_%D0%B4%D0%BB%D1%8F_%D1%86%D0%B5%D0%BB%D1%8B%D1%85_%D1%87%D0%B8%D1%81%D0%B5%D0%BB

function euclid(a, b) {
	while (b !== 0) {
		const temp = a;
		a = b;
		b = temp % b;
	}
	return a;
}

console.log(euclid(42, 56));	// 14
console.log(euclid(462, 1071));	// 21
console.log(euclid(2, 4));	// 2