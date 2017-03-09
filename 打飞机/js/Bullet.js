
//                   属性                                                                 方法
//   子弹                            样式、位置(节点对象)              移动，爆炸

// 构造方法：           因为子弹是有多个

function Bullet(x, y) {
	this.ele = document.createElement("div");
	this.ele.className = "bullet"; // 样式
	
	gameEngine.ele.appendChild(this.ele); // 添加到游戏背景中
	
	this.ele.style.left = x + "px";
	this.ele.style.top = y + "px";
}

// 移动
Bullet.prototype.move = function() {
	
	var self = this; 
	
	var timer = setInterval(function() {
		// 定时更新子弹位置
		self.ele.style.top = self.ele.offsetTop - 10 + "px";
		
		// 子弹超出屏幕
		if (self.ele.offsetTop < 0) {
			// 移除子弹
			gameEngine.ele.removeChild(self.ele);
			clearInterval(timer); // 关闭定时器
		}
		
	}, 30);
}
