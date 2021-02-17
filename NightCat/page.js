function set_dark() {
	var divs = document.getElementsByTagName(new RegExp('^[script]'))

	for (var i = 0; i < divs.length; i++) {
		var el = divs[i];
		if (el.childElementCount > 1) {
			if (el.parentNode.tagName == "BODY") {
				el.classList.add('NightCat_normal')
			}
			if (el.tagName == "LI") {
				el.classList.add('NightCat_li')
			} else {
				el.classList.add('NightCat_normal')
			}
		} else {
			el.classList.add('NightCat_child')
		}
	}
}

function set_white() {
	var divs = document.getElementsByTagName("*")
	var reg = new RegExp('NightCat_[A-Za-z0-9]*');
	for (var i = 0; i < divs.length; i++) {
		var el = divs[i];
		el.className = el.className.replace(reg, ' ');
	}
}