/*
 * className:类名
 * tagName:含有该类的标签
 * parent:父元素，类型可以为对象或ID
 * */

function getByClassS(className, tagName, parent) { //parent：父节点，tagName：该节点的标签名。 这两个参数均可有可无
	if(parent) {
		parent = typeof parent == "string" ? document.getElementById(parent) : parent;
	} else {
		parent = document.body;
	}
	tagName = tagName || "*";
	if(document.getElementsByClassName) { //如果浏览器支持getElementsByClassName，就直接的用
		return parent.getElementsByClassName(className);
	} else {
		var tag = parent.getElementsByTagName(tagName); //获取指定元素
		var tagAll = []; //用于存储符合条件的元素
		for(var i = 0; i < tag.length; i++) { //遍历获得的元素
			for(var j = 0, n = tag[i].className.split(' '); j < n.length; j++) { //遍历此元素中所有class的值，如果包含指定的类名，就赋值给tagnameAll
				if(n[j] == className) {
					tagAll.push(tag[i]);
					break;
				}
			}
		}
		return tagAll;
	}
}

/*
 *兼容个浏览器的事件添加
 * ele为对象
 * type为事件类型
 * fn为事件绑定的函数
 * */
var event = {
	add: function(ele, type, fn) {
		if(ele.addEventListener) {
			ele.addEventListener(type, fn, false); /*DOM2级事件处理*/
		} else if(ele.attachEvent) {
			ele.attachEvent('on' + type, fn); /*IE事件处理*/
		} else {
			ele['on' + type] = fn;
		}
	},
	remove: function(ele, type, fn) {
		if(ele.removeEventListener) {
			ele.removeEventListener(type, fn, false);
		} else if(ele.detchEvent) {
			ele.detachEvent('on' + type, fn);
		} else {
			ele['on' + type] = null;
		}
	}
};

var cls = {
	add: function(ele, cls) {
		var clss = cls.split(' '); /*分开传进的类名*/
		var ele_class = ele.className;
		for(var i = 0, l = clss.length; i < l; i++) {
			if(ele_class.indexOf(clss[i]) < 0) {
				ele_class += ' ' + clss[i];
			}
		}
		ele.className = ele_class;
	},
	remove: function(ele, cls) {
		var clss = cls.split(' '); /*分开传进的类名*/
		var ele_class = ele.className;
		for(var i = 0, l = clss.length; i < l; i++) {
			if(ele_class.indexOf(clss[i]) > 0) {
				ele_class = ele_class.replace(clss[i], "");
			}
		}
		ele_class = ele_class.replace("  ", "").replace(/(^\s*)|(\s*$)/g, ''); /*去掉多余的空格*/
		ele.className = ele_class;
	}
}

//阻止事件冒泡
function stopBubble(event) {
	var e = event || window.event;
	if(e && e.stopPropagation) {
		e.stopPropagation();
	} else { //IE
		e.cancelBubble = true;
	}
}

//阻止事件默认行为
function stopDefault(e) {
	var e = event || window.event;
	// 阻止默认浏览器动作(W3C)
	if(e && e.preventDefault) {
		e.preventDefault();
	} else {
		// IE中阻止函数器默认动作的方式
		window.event.returnValue = false;
	}
	return false;

}

function getMouseXY(e) {
	//获取鼠标的坐标 兼容火狐
	var x, y;
	var e = e || window.event;
	return {
		x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
		y: e.clientY + document.body.scrollTop + document.documentElement.scrollTop
	};
};

/*阻止鼠标右击的浏览器默认行为*/
document.oncontextmenu = function() {
	return false;
};
//设置右击菜单
function setRightClick(e) {
	var e = e || window.event;
	if(e.which == 2 || e.which == 3) {//右击
		//右击执行的方法

		return false;
	}
}