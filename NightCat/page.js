function set_dark() {
	var divs = document.getElementsByTagName("*")

	for (var i = 0; i < divs.length; i++) {
		divs[i].classList.add('NightCat')
	}
}

function set_white() {
	var divs = document.getElementsByTagName("*")

	for (var i = 0; i < divs.length; i++) {
		divs[i].classList.remove('NightCat')
	}
}