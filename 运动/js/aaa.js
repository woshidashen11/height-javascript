
function getStyle(oBox, attr) {
	
	if (window.getComputedStyle) {
		return getComputedStyle(oBox)[attr];
	} else {
		return oBox.currentStyle[attr];
	}
	
}
