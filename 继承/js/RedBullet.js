

function RedBullet(x, y) {
	Bullet.call(this, x, y);
	
	this.ele.style.background = "red"; // 重写父类的方法
}

RedBullet.prototype = new Bullet();
