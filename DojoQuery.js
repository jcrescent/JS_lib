function $Dojo(id){
	var ele = document.getElementById(id);
	ele.click = function(callback){
		this.addEventListener('click', callback);
	}
	ele.hover = function(callback, callbacktwo){
		this.addEventListener('mouseenter', callback);
		this.addEventListener('mouseleave', callbacktwo);
	}
	return ele;
}