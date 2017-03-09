
//              属性                                                方法
// 雪花            颜色、大小、位置（节点对象）            往下飘，往上飘

function Snow() {
	this.ele = document.createElement("img");
	this.ele.className = "snow";
	this.ele.src = "images/snow.gif";
	
	document.body.appendChild(this.ele);
	
	// 位置
	this.ele.style.top = "0px"; // 最顶部
	this.ele.style.left = parseInt(Math.random() * document.documentElement.clientWidth) + "px";
}


// 往下落
Snow.prototype.down = function() {
	
	var self = this; // 保存
	
	var maxHeight = document.documentElement.clientHeight;
	var timer = setInterval(function() {
		self.ele.style.top = self.ele.offsetTop + 10 + "px";
		
		if (self.ele.offsetTop >= maxHeight) {
			clearInterval(timer);
			//移除雪花
			document.body.removeChild( self.ele );
		}
	}, 100);
	
	
//	var maxHeight = document.documentElement.clientHeight;
//	startMove(this.ele, {top: maxHeight}, function() {
//		// 落到地面，移除雪花
//		document.body.removeChild( self.ele );
//	});
}

// 往上飘
Snow.prototype.up = function() {
	var self = this; // 保存

	startMove(this.ele, {top: 0}, function() {
		// 落到地面，移除雪花
		document.body.removeChild( self.ele );
	});
}
