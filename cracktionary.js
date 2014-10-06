var encrypted = "U2FsdGVkX189Z5yIsfrlDY1c5eipysQl81FSgnFzan8sTSy6BLl/aXHdQ5+tDc+EAi25E1g/1namjpTHJ0VsSZ1KZsl1BTxNiSOYi57L";
var success = false;
var passphrase;
var decrypted;
//loop through the whole dictionary, one word at a time
for (var i=0; i<=128984; i++) {
	//set the passphrase to the current word
	passphrase = words[i];
	//decrypt using the passphrase
	decrypted = CryptoJS.Rabbit.decrypt(encrypted, passphrase);
	document.write(passphrase + " " + decrypted + "<br>");}
	//loop through the dictionary again, see if the decrypted result is a word
	for (var j=0; j<=128984; j++) {
		if(decrypted==words[j]) 
		{
			//if the decrypted is a word, print a success message
			document.write("Match found: " + passphrase + " result: " + decrypted)
			success = true;
			var goodpass = passphrase;
			break;
		}
		else
		{
			document.write(passphrase + " probably wasn't the key");
		}
	}
}
//if no match was found, cry about it
if (success==false) 
{
	document.write("No match found ;-;");
}