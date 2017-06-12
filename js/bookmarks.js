var treeDom = document.getElementById('tree');
addEvent(treeDom, 'click', function(event) {
	var e = event || window.event;
	//console.log(e);
	var liDom = (e.target.nodeName == "DIV" ? e.target : e.target.parentNode).parentNode;
	var activeDoms = getByClass('active', treeDom);
	if(liDom.className.indexOf('active') >= 0) {
		removeClass(activeDoms, 'active');
	} else {
		removeClass(activeDoms, 'active');
		addClass(liDom, 'active');
	}
	while(liDom.parentNode && liDom.parentNode.parentNode.nodeName == "LI") {
		liDom = liDom.parentNode.parentNode;
		addClass(liDom, 'active');
	}
	console.log(liDom.innerText)
});

