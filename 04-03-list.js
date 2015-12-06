var prepend = function prepend(element, list) {
	return {
		value: element,
		next: list
	};
}

var nth = function nth(list, index) {
	if (index === 0) {
		return list.value;
	}

	return nth(list.next, index - 1);
}

var arrayToList = function arrayToList(arr) {
	if (arr.length === 0) {
		return undefined;
	}

	return {
		value: arr[0],
		next: arrayToList(arr.slice(1))
	};
}

var listToArray = function listToArray(list) {
	var value = list.value;
	if (list.next === undefined) {
		return value;
	}
	return [ value ].concat(listToArray(list.next)); 
}

var arr = [1, 2, 3];
var list = arrayToList(arr);
console.log('array\t\t', arr);
console.log('arrayToList\t', list);
console.log('prepend(0)\t', prepend(0, list));
console.log('nth(2)\t\t', nth(list, 2));
console.log('listToArray\t', listToArray(list));

