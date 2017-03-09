
function DragObj(boxId) {
	this.ele = document.getElementById(boxId); // 构造方法
}


// 将 start 方法添加到 DragObj 原型对象中，创建出来的所有对象，都共用这个方法，节约内存
DragObj.prototype.start = function() {
	
	var self = this; // 保存当前拖拽对象
	
	this.ele.onmousedown = function(e) {
		// 将两个位置距离保存到  dragObj 里面
		self.disX = e.offsetX;
		self.disY = e.offsetY;
		
		document.onmousemove = function(e) {
			// this ==> document
			self.move(e.clientX, e.clientY);
			
			e.preventDefault(); // 阻止浏览器默认行为
		}
		
		document.onmouseup = function() {
			self.stop();
		}
		
		e.preventDefault(); // 阻止浏览器默认行为
	}
}

DragObj.prototype.move = function(clientX, clientY) {
	var x = clientX - this.disX;
	var y = clientY - this.disY;
	
	this.ele.style.left = x + "px";
	this.ele.style.top = y + "px";
}

DragObj.prototype.stop = function() {
	document.onmousemove = null;
	document.onmouseup = null;
}

