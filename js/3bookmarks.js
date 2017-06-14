var treeDom = document.getElementById('tree');
m$.addEvent(treeDom, 'click', function(event) {
	var e = event || window.event;
	//console.log(e);
	var liDom = (e.target.nodeName == "DIV" ? e.target : e.target.parentNode).parentNode;
	var activeDoms = m$.getByClass('active', treeDom);
	if(liDom.className.indexOf('active') >= 0) {
		m$.removeClass(activeDoms, 'active');
	} else {
		m$.removeClass(activeDoms, 'active');
		m$.addClass(liDom, 'active');
	}
	while(liDom.parentNode && liDom.parentNode.parentNode.nodeName == "LI") {
		liDom = liDom.parentNode.parentNode;
		m$.addClass(liDom, 'active');
	}
	console.log(liDom.innerText)
});