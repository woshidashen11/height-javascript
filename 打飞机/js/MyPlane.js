
//                   属性                                                  方法
//自己的飞机          颜色、位置、图片、大小（节点对象）     初始化、 拖拽移动、开火


var myPlane = {
	ele: null,
	
	// 初始化自己的飞机
	init: function() {
		this.ele = document.createElement("div");
		this.ele.className = "myplane"; // 样式
		
		// 将飞机添加到 游戏面板
		gameEngine.ele.appendChild(this.ele);
		
		// 放到中间
		var centerX = parseInt((gameEngine.ele.offsetWidth - this.ele.offsetWidth) / 2);
		this.ele.style.left = centerX + "px";
		
		
		this.startDrag(); // 支持拖拽
	},
	
	// 开火
	fire: function() {
		var self = this;
		
		// 保存飞机的定时器
		this.timer = setInterval(function() {
			
			// 当前飞机的 left值 + 飞机宽度一半 - 子弹宽度的一半
			var x = parseInt(self.ele.offsetLeft + self.ele.offsetWidth/2) - 3;
			var y = self.ele.offsetTop;
			
			new Bullet(x, y).move();
			
		}, 1000);
	},
	
	// 支持拖拽
	startDrag: function() {
		
		var self = this;
		
		// 鼠标按下
		this.ele.onmousedown = function(e) {
			// 获取鼠标点击在 飞机图片 中的偏移
			var disX = e.offsetX;
			var disY = e.offsetY;
			
			// 在整个页面中移动
			document.onmousemove = function(e) {
				
				// 计算飞机元素的 位置
				var x = e.clientX - disX - gameEngine.ele.offsetLeft;
				var y = e.clientY - disY;
				
				// 左边界
				if (x < 0) {
					x = 0;
				}
				
				// 右边界
				if (x > gameEngine.ele.offsetWidth - self.ele.offsetWidth) {
					// 最大宽度 = 游戏面板宽度 - 飞机元素的宽度
					x = gameEngine.ele.offsetWidth - self.ele.offsetWidth;
				}
				
				// 更新位置
				self.ele.style.left = x + "px";
				self.ele.style.top = y + "px";
			}
			
			// 鼠标抬起
			document.onmouseup = function() {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}
};
