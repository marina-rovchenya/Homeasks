//Строка состоящая из символов номера которых переданы в аргументы

function str(...nums){
	var str="";
	for(var i in nums){
		str+=String.fromCharCode(nums[i])
	}
	console.log(str)
}

str(34, 78, 23)