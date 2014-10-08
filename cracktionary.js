var encrypted = "U2FsdGVkX189Z5yIsfrlDY1c5eipysQl81FSgnFzan8sTSy6BLl/aXHdQ5+tDc+EAi25E1g/1namjpTHJ0VsSZ1KZsl1BTxNiSOYi57L";
var success = false;
var passphrase;
var decrypted;
//keep scrolling the page down, so new guesses are on the screen
pageScroll();
//loop through the whole dictionary, one word at a time
for (var i=0; i<=128984; i++) {
	//set the passphrase to the current word
	passphrase = words[i];
	try {
		//decrypt using the passphrase and convert the decrypted to a string
		decrypted = CryptoJS.Rabbit.decrypt(encrypted, passphrase).toString(CryptoJS.enc.Utf8);
		document.write("Matching passphrase found : " + passphrase + " Resultant plaintext : " + decrypted + "<br>");
		success = true;
		break;
	} catch(err) {
		document.write(passphrase + " probably was not the key." + "<br>");
	}
}
//if no match was found, cry about it
if (success==false) {
	document.write("No match found ;-;");
}
//function to handle page scrolling
function pageScroll() {
    	window.scrollBy(0,50); // horizontal and vertical scroll increments
    	scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}
