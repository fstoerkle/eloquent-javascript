var range = function range(start, end) {
	var theRange = [];
	for (; start <= end; start++) {
		theRange.push(start);
	}
	return theRange;
};

var sum = function sum(arr) {
	var theSum = 0;
	for (var i = 0; i < arr.length; i++) {
		theSum += arr[i];
	}
	return theSum;
}

var theRange = range(1, 10);
console.log(theRange);
console.log(sum(theRange));