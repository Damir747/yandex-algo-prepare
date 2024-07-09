function anagram(s, t) {
	const objT = {};
	for (let i = 0; i < t.length; i++) {
		objT[t[i]] = (objT[t[i]] || 0) + 1;
	}

	const objS = {};
	for (let i = 0; i < s.length; i++) {
		if (objT[s[i]]) {
			objS[s[i]] = (objS[s[i]] || 0) + 1;
		}
	}

	let min = Infinity;
	for (const key in objT) {
		if (!(objS[key])) {
			return 0;
		}
		const temp = Math.floor(objS[key] / objT[key]);
		if (temp < min) {
			min = temp;
		}
	}

	return min;
};

console.log(anagram("aa", "aa"));
console.log(anagram("aa", "ab"));
console.log(anagram("aaa", "aa"));
console.log(anagram("aaaa", "aa"));
console.log(anagram("aaaaa", "aa"));
console.log(anagram("aaaaaa", "aa"));
console.log(anagram("aaaaaaa", "aa"));
console.log(anagram("aaaaaaaa", "aa"));