
//               属性                                        行为/函数/方法
//   萤火虫     位置，大小，颜色(节点对象)       飞

function FireWorm() {
	
	// 对象的属性，
	this.ele = document.createElement("img");
	this.ele.src = "img/1.jpg";
	this.ele.className = "fire";
	document.body.appendChild(this.ele); // 显示
	
	// 调整萤火虫的位置
	//   point() 说明是调用自己的函数，返回结果是 对象，{left:随机X,top:随机Y} 
	//                                       {left:随机X,top:随机Y}.left	

	this.ele.style.left = this.point().left + "px";
	this.ele.style.top = this.point().top + "px";
	
}


// 对象的行为
//  this 是萤火虫对象
FireWorm.prototype.fly = function() {
	// this 是当前函数运行时依附的对象
	var self = this;  // self 保存this，是萤火虫对象
	
	startMove(this.ele, this.point(), function() {

		// this 不是萤火虫对象     window
		
		// self 就是萤火虫对象了
		self.fly();
	});
}

FireWorm.prototype.point = function (){
	var x = parseInt(Math.random() * document.documentElement.clientWidth);
	var y = parseInt(Math.random() * document.documentElement.clientHeight);
	
	return {left:x,top:y};
	
}
