var deepEqual = function deepEqual(object, anotherObject) {
	if (!object || !anotherObject) {
		return false;
	}

	if (object === anotherObject) {
		return true;
	}

	if (typeof object === 'object' && typeof anotherObject === 'object') {
		var result = true;
		var hasProperties = false;
		for (property in object) {
			if (!hasProperties) {
				hasProperties = true;
			}
			result = result && deepEqual(object[property], anotherObject[property]);
		}
		return hasProperties && result;
	} else {
		return false;
	}

	return false;
}

var obj1 = {}
var obj2 = { foo: 'bar' }
var obj3 = { value: 10, next: { value: 7 } }
var obj4 = { value: 10, next: { value: 7 } }


console.log();
console.log('obj1', obj1)
console.log('obj2', obj2)
console.log('obj3', obj3)
console.log('obj4', obj4)
console.log();
console.log('deepEqual(obj1, obj2)', deepEqual(obj1, obj2))
console.log('deepEqual(obj1, obj3)', deepEqual(obj1, obj3))
console.log('deepEqual(obj1, obj4)', deepEqual(obj1, obj4))
console.log('deepEqual(obj2, obj3)', deepEqual(obj2, obj3))
console.log('deepEqual(obj2, obj4)', deepEqual(obj2, obj4))
console.log('deepEqual(obj3, obj4)', deepEqual(obj3, obj4))
console.log('deepEqual(null, obj1)', deepEqual(null, obj1))
console.log('deepEqual(undefined, undefined)', deepEqual(undefined, undefined))
console.log('deepEqual(null, null)', deepEqual(null, null))
console.log('deepEqual(obj3, undefined)', deepEqual(obj3, undefined))
console.log();