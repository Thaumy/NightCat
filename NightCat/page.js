function set_dark() {
	var divs = document.getElementsByTagName("*")

	for (var i = 0; i < divs.length; i++) {
		var el = divs[i];
		if (el.childElementCount > 1) {
			if (el.parentNode.tagName == "BODY") {
				el.classList.add('NightCat')
			}
			if (el.tagName == "LI") {
				el.classList.add('NightCat_li')
			} else {
				el.classList.add('NightCat')
			}
		} else {
			el.classList.add('NightCat_child')
		}
	}
}

function set_white() {
	var divs = document.getElementsByTagName("*")

	for (var i = 0; i < divs.length; i++) {
		divs[i].classList.remove('NightCat')
		divs[i].classList.remove('NightCat_child')
	}
}