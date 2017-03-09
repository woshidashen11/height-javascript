
//                   属性                                                                 方法
//   子弹                            样式、位置(节点对象)              移动，爆炸

// 构造方法：           因为子弹是有多个

function Bullet(x, y) {
	if (x == undefined || y == undefined) {
		return ;
	}
	
	// 子弹标志
	this.id = new Date().getTime() + "" + (Math.random() * 100000); 
	
	gameEngine.bullets[this.id] = this; // 将子弹保存到游戏引擎中
	
	this.ele = document.createElement("div");
	this.ele.className = "bullet"; // 样式
	
	gameEngine.ele.appendChild(this.ele); // 添加到游戏背景中
	
	this.ele.style.left = x + "px";
	this.ele.style.top = y + "px";
}

// 移动
Bullet.prototype.move = function() {
	
	var self = this; 
	
	// 保存移动定时器
	this.timer = setInterval(function() {
		// 定时更新子弹位置
		self.ele.style.top = self.ele.offsetTop - 10 + "px";
		
		// 子弹超出屏幕
		if (self.ele.offsetTop < 0) {
			// 移除子弹
			gameEngine.ele.removeChild(self.ele);
			clearInterval(self.timer); // 关闭定时器
			
			delete gameEngine.bullets[self.id]; // 移除子弹
		}
		
	}, 30);
}

// 子弹爆炸
Bullet.prototype.boom = function() {
	
	var self = this;
	
	clearInterval(this.timer); // 停止移动
				
	delete gameEngine.bullets[self.id]; // 移除游戏引起中的子弹子弹

	
	self.ele.className = "bullet-die"; // 改变子弹大小
	
	// 子弹爆炸的图片
	var dieImgs = ["die1.png", "die2.png"];
	var i = 0;
	var dieTimer = setInterval(function() {
		
		self.ele.style.background = "url(img/"+dieImgs[i]+")";
		i++;
		
		if (i >= dieImgs.length) {
			clearInterval(dieTimer); // 清除爆炸图片更新定时器

			// 移除子弹
			gameEngine.ele.removeChild(self.ele);
		}
	}, 50);
	
}
