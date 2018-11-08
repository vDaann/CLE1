//Functie van de schoenmaat naar centimeters
function converterL() {
    //Variabel x geef ik de waarde van de schoenmaat
	let x = document.getElementById("schoenmaat").value;

    //Variabel x deel ik door 1.5 om hem naar centimeters te converteren
	let centimeters = x / 1.5;
    //Variabel centimeters geef ik één decimaal getal achter de komma
	let afgerond = Math.round(centimeters * 10) / 10;

    //Het invulveld centimeters krijgt hier de waarde toegezegd
	document.getElementById("centimeters").value = afgerond + " centimeter";

}

//Functie om een nieuwe cookie aan te maken
function newCookie() {
    //Variabel cookieValue geef ik de waarde van schoenmaat
    let cookieValue = document.getElementById("schoenmaat").value;
    //cookieValue sla ik op bij de cookies van je browser met een string
    document.cookie = "schoenmaat=" + cookieValue;
}

//Functie om de cookie op te halen
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
//Invulveld schoenmaat haalt de cookie op en stopt deze terug, indien die aanwezig is
document.getElementById("schoenmaat").value = getCookie("schoenmaat"); 

//Hierbij roep ik opnieuw de converterL functie aan om meteen met een resultaat te komen, mocht de cookie aanwezig zijn
if (document.getElementById("schoenmaat").value !== "") {
	converterL();
}