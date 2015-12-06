var reverseArray = function reverseArray(list) {
	var newList = [];
	for (var i = list.length - 1; i >= 0; i--) {
		newList.push(list[i]);
	}
	return newList;
}

var reverseArrayInPlace = function reverseArrayInPlace(list) {
	var middle = Math.floor(list.length / 2);

	for (var i = 0, j = list.length - 1; i < middle; i++, j--) {
		var tmp = list[i];
		list[i] = list[j];
		list[j] = tmp;
	}
}


var list = [1, 2, 3, 4, 5, 6, 7];

console.log();
console.log(list);
console.log();

console.log('reverseArray:');
console.log(' -> ', reverseArray(list));
console.log();

console.log('reverseArrayInPlace:');
reverseArrayInPlace(list);
console.log(' -> ', list);
console.log();
