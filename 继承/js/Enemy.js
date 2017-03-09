//            属性                                   方法
//敌机          位置、颜色(节点对象)       移动、爆炸


// 步骤
//   1、先创建一个中飞机的敌机
//   2、 大、中、小
//   3、 定时创建中飞机
//   4、 定时创建大、中、小飞机


// 通过type，来决定创建的敌机的类型：大、中、小的
function Enemy(type) {
	
	// 当前敌机的编号： 时间戳 + 随机数   ==> 确保 id 尽可能地不重复
	this.id = new Date().getTime() + "" + (Math.random() * 100000); 
	
	gameEngine.enemies[this.id] = this; // 将当前敌机添加到游戏引擎中保存
	
	// div 元素
	this.ele = document.createElement("div");
	
	// 区分敌机类型，分别创建
	switch (type) {
		// Enemy.prototype 原型对象  Enemy_Type_Large 属性值
		case Enemy.prototype.Enemy_Type_Large:
			this.ele.className = "enemy-large"; // 样式
			// 速度值
			this.speed = Enemy.prototype.Enemy_Speed_Large; 
			this.dieImgs = ["img/plane3_die1.png", "img/plane3_die2.png", "img/plane3_die3.png", "img/plane3_die4.png", "img/plane3_die5.png", "img/plane3_die6.png"];
	
			break;
			
		case Enemy.prototype.Enemy_Type_Middle:
			this.ele.className = "enemy-middle";
			this.speed = Enemy.prototype.Enemy_Speed_Middle;
			this.dieImgs = ["img/plane2_die1.png", "img/plane2_die2.png", "img/plane2_die3.png", "img/plane2_die4.png"];
			break;
		case Enemy.prototype.Enemy_Type_Small:
			this.ele.className = "enemy-small";
			this.speed = Enemy.prototype.Enemy_Speed_Small;
			this.dieImgs = ["img/plane1_die1.png", "img/plane1_die2.png", "img/plane1_die3.png"];
			break;
			
		default:
			this.ele.className = "enemy-small";
			this.speed = Enemy.prototype.Enemy_Speed_Small;			break 
			this.dieImgs = ["img/plane1_die1.png", "img/plane1_die2.png", "img/plane1_die3.png"];
	}
	
	gameEngine.ele.appendChild(this.ele);
	
	// 随机位置 [0, 游戏背景宽度 - 自身敌机宽度)
	var x = parseInt(Math.random() * (gameEngine.ele.offsetWidth - this.ele.offsetWidth))
	
	// 没露头
	var y = -1 * this.ele.offsetHeight;
	
	this.ele.style.left = x + "px";
	this.ele.style.top = y + "px";
}


// 敌机的原型对象。注意放在 move 函数的前面，否则会覆盖掉 move方法
Enemy.prototype = {
	Enemy_Type_Large: 0,  // 大飞机
	Enemy_Type_Middle: 1, // 中飞机
	Enemy_Type_Small: 2, // 小飞机
	
	// 速度值越大，代表速度越慢
	Enemy_Speed_Large: 300,  // 大飞机的速度
	Enemy_Speed_Middle: 100,  // 中飞机的速度
	Enemy_Speed_Small: 50  // 小飞机的速度
};

// 敌机移动
Enemy.prototype.move = function() {
	var self = this;
	
	// 保存定时器
	this.timer = setInterval(function() {
		// 更新位置
		self.ele.style.top = self.ele.offsetTop + 10 + "px";
		
		// 到达页面底部
		if (self.ele.offsetTop > document.documentElement.clientHeight) {
			
			clearInterval(self.timer); // 关闭定时器
			
			gameEngine.ele.removeChild(self.ele); // 移除
			
			delete gameEngine.enemies[self.id]; // 移除游戏引擎中保存的敌机
		}
	}, this.speed);
	// this.speed 根据飞机的类型，来确定移动的速度
}

// 爆炸
Enemy.prototype.boom = function() {
	var self = this;
	
	clearInterval(this.timer); // 清除移动定时器，停止移动

	delete gameEngine.enemies[self.id]; // 移除游戏引擎中保存的敌机

	
	var i = 0;
	var dieTimer = setInterval(function(){
		self.ele.style.background = "url(" + self.dieImgs[i] +")";
		i++;
		
		if (i >= self.dieImgs.length) {
			clearInterval(dieTimer);
			
			gameEngine.ele.removeChild(self.ele); // 移除
		}
	}, 80);
	
}
