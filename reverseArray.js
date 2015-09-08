/*
var reverse = function(array) {
    var half = Math.floor((array.length-1)/2);
    for(var i=0;i<((array.length-1)-i);i++){
        var temp = array[i];
        array[i] = array[(array.length-1)-i];
        array[(array.length-1)-i] = temp;
    }
    return array;
}
*/

var reverse = function(a) {
	if ( a.length === 0 ) return a;	
	var middle = Math.floor(a.length/2);
	for (var i = 0;i< middle; i++) {
		var temp = a[i];
		a[i] = a[(a.length-(1+i))];
		a[(a.length-(1+i))] = temp;
	};
	return a;
}

var array = [1,2,3,4,5];
console.log(array);
console.log(reverse(array));
var array = [1,2,3,4];
console.log(array);
console.log(reverse(array));