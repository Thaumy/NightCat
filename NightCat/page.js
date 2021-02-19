function set_dark() {
	for (var i = 0; i < document.styleSheets.length; i++) {
		var StyleSheet = document.styleSheets[i]

		for (var i = 0; i < StyleSheet.cssRules.length; i++) {
			var CSSStyleRule = StyleSheet.cssRules[i]
			//var color = CSSStyleRule.style.getPropertyValue("color");
			console.log(RGBisLow("rgb(112, 2, 3)", 30))
			//CSSStyleRule.style.setProperty("background-color", "yellow")
		}

	}
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

function RGBisLow(src, dest) {
	var reg_r = new RegExp("\([0-9]*,")
	var reg_g = new RegExp(" [0-9]*,")
	var reg_b = new RegExp(" [0-9]*\)")
	r.exec(src)[0].trim()

	var r = reg_r.exec(src)[0].trim()
	r = parseInt(r.substring(1, g.length - 2), 10)

	var g = reg_g.exec(src)[0].trim()
	g = parseInt(g.substring(1, g.length - 2), 10)

	var b = reg_b.exec(src)[0].trim()
	b = parseInt(b.substring(1, b.length - 2), 10)

	return (r + g + b) < dest
}