
//                   属性                                                                 方法
// 物理引擎对象       颜色、大小、位置、背景图片(节点对象)    开始游戏、创建敌机   


var gameEngine = {
	ele: null,
	
	start: function() {
		// 得到元素
		this.ele = document.getElementById("main_body");

		// 1、初始化自己的飞机
		myPlane.init();
		myPlane.fire();
		
		
		// 2、创建敌机
		this.createEnemy();
	},
	
	// 创建敌机
	createEnemy: function() {
		
		// 每隔3秒创建大飞机
		setInterval(function() {
			new Enemy(Enemy.prototype.Enemy_Type_Large).move();
		}, 3000);
		
		
		// 每隔2秒创建中飞机
		setInterval(function() {
			new Enemy(Enemy.prototype.Enemy_Type_Middle).move();
		}, 2000);
		
		
		// 每隔1秒创建小飞机
		setInterval(function() {
			new Enemy(Enemy.prototype.Enemy_Type_Small).move();
		}, 1000);
		
	}
};
