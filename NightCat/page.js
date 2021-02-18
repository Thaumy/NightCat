function set_dark() {
	var divs = document.getElementsByTagName('*')

	for (var i = 0; i < divs.length; i++) {
		var el = divs[i];
		if (el.childElementCount > 1) {
			if (isType(el.parentNode, "body")) {
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

	var pre = document.getElementsByTagName('pre')
	var code = document.getElementsByTagName('code')
	
}

function set_white() {
	var divs = document.getElementsByTagName("*")
	var reg = new RegExp('NightCat_[A-Za-z0-9]*');
	for (var i = 0; i < divs.length; i++) {
		var el = divs[i];
		if (el.className != null)
			el.className = el.className.toString().replace(reg, ' ');
	}
}

function isType(el, type) {
	return el.tagName.toLowerCase() == type.toLowerCase()
}