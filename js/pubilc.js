var domBack_to_top = m$.getById('back_to_top');
var domBody = document.getElementsByTagName('body')[0];
m$.addEvent(window, 'scroll', function(e) {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop > 200) {

	} else if(scrollTop < 200) {

	} else if(scrollTop > domBody.offsetHeight) {
		domBack_to_top.style.display = 'block';

	} else if(scrollTop < domBody.offsetHeight) {
		domBack_to_top.style.display = 'hidden';
	}
});