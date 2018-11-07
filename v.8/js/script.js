function converterL() {
	let x = document.getElementById("schoenmaat").value;

	let centimeters = x / 1.5;
	let afgerond = Math.round(centimeters * 10) / 10;

	document.getElementById("centimeters").value = afgerond + " centimeter";

}

function newCookie() {
    let cookieValue = document.getElementById("schoenmaat").value;
    document.cookie = "schoenmaat=" + cookieValue;
}

function getCookie(pcookie) {
	//De naam van de cookie (parametercookie)
    let name = pcookie + "=";

    //Hierbij decode hij de cookie uit de url
    let decodedCookie = decodeURIComponent(document.cookie);

    //Hij split de string op een ;
    let ca = decodedCookie.split(';');

    //Hij pakt de lengte van ca
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];

        //Hij kijkt of de eerste character of die leeg is
        while (c.charAt(0) == ' ') {
        	//Hij pakt hier een gedeelte van de string
            c = c.substring(1);
        }
        //Hij kijkt of de cookie aanwezig is in die substring, is dat zo return de lengte van de string, en de substring
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    //Anders returned die niks
    return "";
}

document.getElementById("schoenmaat").value = getCookie("schoenmaat"); 

if (document.getElementById("schoenmaat").value !== "") {
	converterL();
}