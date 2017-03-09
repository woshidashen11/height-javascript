
// x, y 在哪里创建碎片
function FireSpark(x, y) {
	this.ele = document.createElement("div");
	
	this.ele.className = "spark";
	
	document.body.appendChild(this.ele); // 显示
	
	this.ele.style.left = x + "px";
	this.ele.style.top = y + "px";
	
	// 随机颜色
	var red = parseInt(Math.random()*256);
	var green = parseInt(Math.random()*256);
	var blue = parseInt(Math.random()*256);
	
	this.ele.style.background = "rgb("+red+","+green+"," + blue+")";
}

// 掉下来
FireSpark.prototype.fall = function() {
	// 产生 [0,20) 的值
	var xSpeed = parseInt(Math.random() * 20);
	var ySpeed = parseInt(Math.random() * 20);
	
	// 随机产生正数或负数
	xSpeed = (Math.random() > 0.5) ? xSpeed : -xSpeed;
	ySpeed = (Math.random() > 0.5) ? ySpeed : -ySpeed;
	 
	
	var self = this;
	var timer = setInterval(function() {
		ySpeed++;
		
		self.ele.style.left = self.ele.offsetLeft + xSpeed + "px";
		self.ele.style.top = self.ele.offsetTop + ySpeed + "px";
		
		if (self.ele.offsetLeft < 0 || self.ele.offsetTop > document.documentElement.clientHeight) {
			document.body.removeChild(self.ele);
			clearInterval(timer);
		}
	}, 30);

}
