var divs = document.getElementsByTagName("*");

function set(divs) {
	for (var i = 0; i < divs.length; i++) {
		if (divs[i].childElementCount != 0) {
			divs[i].classList.add('NightCat')
			set(divs[i])
		} else {
			divs[i].classList.add('NightCat')
		}

	}
}

set(divs)