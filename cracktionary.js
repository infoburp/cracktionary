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
	//decrypt using the passphrase
	decrypted = CryptoJS.Rabbit.decrypt(encrypted, passphrase);
	//convert the decrypted to a string
	decrypted = decrypted.toString();
	//write the try onto the page
	document.write(passphrase + " " + decrypted + "<br>");
	//use regex to check if the decrypted string contains no numbers
	var matches = decrypted.match(/\d+/g);
	if (matches == null) {
	    alert(passphrase + " : " + decrypted);
	}
	//check if the decrypted string contains one or more spaces
	if(decrypted.indexOf(' ') !== -1)
	{
	    alert(passphrase + " : " + decrypted);
	}
}
//if no match was found, cry about it
if (success==false) 
{
	document.write("No match found ;-;");
}
//function to handle page scrolling
function pageScroll() {
    	window.scrollBy(0,50); // horizontal and vertical scroll increments
    	scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}