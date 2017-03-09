
//                   属性                                                                 方法
// 物理引擎对象       颜色、大小、位置、背景图片(节点对象)    开始游戏、创建敌机   
//            所有的敌机



// 游戏引擎中，保存所有的敌机
//          保存所有的子弹

// 在游戏引擎中，开辟一个定时器，用于判断 子弹是否敌机，   敌机是否撞到自己的飞机（GameOver）
//           用于碰撞检测

var gameEngine = {
	ele: null,
	
	enemies: {}, // 所有敌机
	
	bullets: {}, // 所有子弹
	
	start: function() {
		// 得到元素
		this.ele = document.getElementById("main_body");

		// 1、初始化自己的飞机
		myPlane.init();
		myPlane.fire();
		
		
		// 2、创建敌机
		this.createEnemy();
		
		// 3、碰撞检测
		this.crashListen();
	},
	
	// 整个游戏中的碰撞检测
	crashListen: function() {
		
		setInterval(function() {
			
			// 遍历所有的敌机
			for (var i in gameEngine.enemies) {
				var enemy = gameEngine.enemies[i]; // 当前敌机
				
				// 遍历所有子弹
				for (var j in gameEngine.bullets) {
					var bullet = gameEngine.bullets[j];
					
					// 检测子弹有没有打中飞机
					if (isCrash(enemy.ele, bullet.ele)) {
						console.log("打中敌机！");
						
						enemy.boom(); // 敌机爆炸
						bullet.boom(); // 子弹爆炸
						
						//gameEngine.ele.removeChild( enemy.ele ); // 飞机
					}
				}
			}
		}, 5);
		
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
