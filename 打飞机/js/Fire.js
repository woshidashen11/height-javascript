

// 烟花筒
function Fire(x, y) {
	this.ele = document.createElement("div");
	this.ele.className = "fire";
	
	document.body.appendChild(this.ele); // 显示
	
	// 位置：   ==> 参数
	this.ele.style.left = x + "px";
	// 地面
	this.ele.style.top = (document.documentElement.clientHeight - 30) +"px";

	
	// 保存烟花的目标位置
	this.targetX = x;
	this.targetY = y;
}

// 发射
Fire.prototype.send = function() {
	
	var self = this;
	
	// 动画
	startMove(this.ele, {top: this.targetY, height: 3}, function() {
		
		// 移除烟花筒
		document.body.removeChild(self.ele);
		
		// 爆炸，碎片
		for (var i = 0; i < 30; i++) {
			// 在 目标位置 创建烟花碎片，并下落
			new FireSpark(self.targetX, self.targetY).fall(); 
		}
	});
}
