function HashMap() {
	var size = 0;
	var entry = new Object();

	this.put = function(key, value) {
		if (!this.containsKey(key)) {
			size++;
		}
		entry[key] = value;
	}

	this.get = function(key) {
		return this.containsKey(key) ? entry[key] : null;
	}

	this.remove = function(key) {
		if (this.containsKey(key) && (delete entry[key])) {
			size--;
		}
	}

	this.containsKey = function(key) {
		return (key in entry);
	}

	this.containsValue = function(value) {
		for ( var prop in entry) {
			if (entry[prop] == value) {
				return true;
			}
		}
		return false;
	}

	this.getValues = function() {
		var values = new Array();
		for ( var prop in entry) {
			values.push(entry[prop]);
		}
		return values;
	}

	this.getKeys = function() {
		var keys = new Array();
		for ( var prop in entry) {
			keys.push(prop);
		}
		return keys;
	}

	this.getSize = function() {
		return size;
	}

	this.clear = function() {
		size = 0;
		entry = new Object();
	}
}

Date.prototype.format = function(fmt) { // author: meizz
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
		// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
			.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
				: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}



function getParam(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function getUrlParam(url){
	if(url.indexOf("#") > -1){
		var param = url.substring(url.indexOf("?")+1,url.indexOf("#"));
	} else{
		var param = url.substring(url.indexOf("?")+1,url.length);
	}
	return param;
}

function getPath(url){
	if(url.indexOf("#") > -1){
		var path = url.substring(url.indexOf("#")+1,url.length);
	} else{
		return null;
	}
	return path;
}


function getUrlBase(url){
    return  url.substring(url.indexOf("?")+1);
}

function getUrlJingHao(url){
	if(url.indexOf("#") > -1){
		var param = url.substring(url.indexOf("#")+1,url.length);
	} else{
		var param = null;
	}
	return param;
}