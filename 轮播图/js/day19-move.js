
// 透明度： 缓冲切换
// startMove 支持: top, left, width, opacity 

function startMove(oBox, attr, iTarget, fn)
{
	clearInterval(oBox.timer);
	
	oBox.timer = setInterval(function() {
		// 1、得到当前值
		
		var current = getStyle(oBox, attr);

		if (attr == "opacity") {
			//      0.1 ==> 10   统一成百分比的形式
			current *= 100;
			//      0.115 ==> 11.5  ==> 12  统一整数
			current = Math.round(current);
		} else {
			current = parseInt(current);
		}
		
		// 2、计算速度
		var speed = (iTarget - current) / 6;
		speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
		
		// 3、判断
		if (current == iTarget) {
			clearInterval(oBox.timer);
			
			// 到达目标位置，调用回调函数，来创建新的定时器
			fn && fn();
			
			return ;
		}
		
		// 4、更新位置
		if (attr == "opacity") {
			oBox.style.opacity = (current + speed) / 100;
			oBox.style.filter = "alpha(opacity="+(current + speed)+")"; 
		} else {
			oBox.style[attr] = current + speed +"px"; 
		}
	}, 100);
	
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