
// startMove: 将一个物体移动到目标位置
// 参数：
//     oBox         物体(节点对象)
//     attr         修改物体的属性(例如： left, top)
//     iTarget      目标位置
//     fn           动作完成后的，回调函数

function startMove(oBox, attr, iTarget, fn) {
	
	// 先清除之前物体的定时器
	clearInterval(oBox.timer);

	oBox.timer = setInterval(function() {

		// 1、获取当前位置
		//   因为节点中没有写 style， 就不能使用 oBox.style 来【获取】
		var current = parseInt( getStyle(oBox, attr) );
		
		// 2、速度
		var speed = (iTarget > current) ? 10 : -10;
		
		// 3、判断
		if (current == iTarget) {
			
			// 先清除之前的定时器
			clearInterval(oBox.timer); // 停止
			
			// 到达目标位置，调用回调函数，来创建新的定时器
			fn && fn();
			
			return ;
		}
		
		// 4、更新位置
		oBox.style[attr] = current + speed +"px"; 

	}, 30);
	
	
}

// 获取 oBox 中样式中 属性名为 attr 的值
function getStyle(oBox, attr) {
	if (window.getComputedStyle) {
		// 非IE中
		return getComputedStyle(oBox)[attr];
	} else {
		// IE 
		return oBox.currentStyle[attr];
	}
}
