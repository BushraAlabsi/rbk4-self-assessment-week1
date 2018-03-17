// your code here
// var array = new Array()
// array.prototype.first= function()
// {
// 	return array[0];
// }
// array.prototype.last= function()
// {
// 	if (array.length)
// 	return array[array.length-1];
//     return ; 
// }

// I switched becuase it told me (the console told me) that prototype is not a property 
//of array object, exactly in these words: "Cannot set property 'first' of undefined"


var array = new Array()
array.first= function()
{
	return array[0];
}
array.last= function()
{
	if (array.length)
	return array[array.length-1];
    return ; 
}