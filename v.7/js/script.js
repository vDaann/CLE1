function converterL() {
	let x = document.getElementById("schoenmaat").value;

	let centimeters = x / 1.5;
	let afgerond = Math.round(centimeters * 10) / 10;

	document.getElementById("centimeters").value = afgerond + " centimeter";
}