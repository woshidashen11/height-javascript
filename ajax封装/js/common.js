
// 函数 convert： 作用，将 data 这个对象 转换成  查询字符串
// 例如：  传入 {regname: "zhangsan", psw: "123"}  
//      返回的结果是 regname=zhangsan&psw=123
function convert(data) {
	
	// 定义一个空数组
	var arr = [];
	
	// 快速遍历对象
	for (var key in data) {
		// 拼接 属性名=属性值  形式，压入数组 
		arr.push(key + "=" + data[key]);
	}

	// 将数组中的元素 用 & 连接在一起，并返回
	return arr.join("&");
}
