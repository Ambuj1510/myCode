function compute() {
	var inputString = document.getElementById("data").value;
	var myArray = inputString.split(",");
	var maximum = 0, avgv = 0, sum = 0;
	document.getElementById("cs").textContent = " ";

	for (var i = 0; i < myArray.length; i++) {
		myArray[i] = +myArray[i];
		if (myArray[i] < 1 || myArray[i] > 100) {
			document.getElementById("cs").textContent = " ";
			document.getElementById("cs").textContent = "Enter an integer between 1 and 100";
			document.getElementById("maxi").value = 0;

			document.getElementById("avg").value = 0;

			return false;
		}
	}

	if (myArray.length < 10) {
		document.getElementById("cs").textContent = " ";
		document.getElementById("cs").textContent = "Please enter atleast 10 numbers";
		document.getElementById("maxi").value = 0;

		document.getElementById("avg").value = 0;
		return false;
	}

	maximum = myArray[0];

	for (var i = 0; i < myArray.length; i++) {
		if (maximum < myArray[i])
			maximum = myArray[i];
		sum = sum + myArray[i];
	}

	avgv = sum / myArray.length;

	document.getElementById("maxi").value = maximum;

	document.getElementById("avg").value = avgv;
}

function populateCityAndState() {

	var currentZip = " ";
	currentZip = document.getElementById("zip").value;
	if (currentZip == "" || currentZip.length < 5) {
		alert("Invalid zip, Enter a valid zip");
	} else {
		var myXmlHttpRequest = new XMLHttpRequest();
		myXmlHttpRequest.overrideMimeType("application/json");
		var url = "zipMapping.json";
		myXmlHttpRequest.open("GET", url, true);
		myXmlHttpRequest.onreadystatechange = function() {
			if (myXmlHttpRequest.readyState == 4
					&& myXmlHttpRequest.status == 200) {
				var myArr = JSON.parse(myXmlHttpRequest.response);
				myFunction(myArr);
			} else {
				console.log("fail ajax");
			}
		};
		myXmlHttpRequest.send(null);

	}

}

function myFunction(arr) {
	console.log(arr);
	var userEnteredZip = document.getElementById("zip").value;
	var isZipFound = false;
	var cityStateObject;
	for (var i = 0; i < arr.zipcodes.length; i++) {
		if (arr.zipcodes[i].zip == userEnteredZip) {
			isZipFound = true;
			cityStateObject = arr.zipcodes[i];
		}
	}

	if (isZipFound) {
		document.getElementById("city").value = cityStateObject.city;
		document.getElementById("state").value = cityStateObject.state;
	} else {
		alert("Data about the zipcode that you enetered is not available");
	}

}

function validateMyForm() {

	var isFormValid = true;

	var isNameValid = checkNameValidity();
	var isAddressValid = checkAddressValidity();
	var isEmailValid = checkEmailValidity();
	var isCheckboxValid = checkCheckBoxValidity();
	var isRadioValid = checkRadioValidity();

	if (isNameValid && isAddressValid && isEmailValid && isRadioValid
			&& isCheckboxValid) {
		return true;
	} else {
		return false;
	}
}

function checkNameValidity() {

	var userEnteredName = document.getElementById("username").value;
	if (userEnteredName == "" /* or check if undefined*/) {
		alert("Name is required");
		return false;
	} else if (userEnteredName.match(/^[a-zA-Z]+$/)) {

		return true;
	} else {

		document.getElementById("username").value = ""
		alert("Name may not contain number");

		return false;

	}

}

function checkAddressValidity() {

	var userEnteredAddress = document.getElementById("streetaddress").value;
	if (userEnteredAddress == "" /* or check if undefined*/) {
		alert("address is required");
		return false;
	} else if (userEnteredAddress.match(/^[0-9a-zA-Z\s]+$/)) {

		return true;
	} else {

		document.getElementById("streetaddress").value = ""
		alert("Address may only contain alphabets and numbers");

		return false;

	}

}

function checkEmailValidity() {

	var userEnteredEmail = document.getElementById("e-mail").value;
	if (userEnteredEmail == "" /* or check if undefined*/) {
		alert("email ID is required");
		return false;
	} else if (userEnteredEmail
			.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {

		return true;
	} else {

		document.getElementById("e-mail").value = ""
		alert("Enter appropriate email ID");

		return false;

	}

}

function checkCheckBoxValidity() {

	var chx1 = document.getElementsByTagName('input');
	var count = 0;
	for (var i = 0; i < chx1.length; i++) {

		if (chx1[i].type == 'checkbox' && chx1[i].checked) {
			return true;
			++count;
		}
	}

	alert("Please select atleast two checkboxes")
	return false;
}

function checkRadioValidity() {

	var chx = document.getElementsByTagName('input');
	for (var i = 0; i < chx.length; i++) {

		if (chx[i].type == 'radio' && chx[i].checked) {
			return true;
		}
	}

	alert("Please select atleast one radio button")
	return false;

}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 12 * 30 * 30 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

var now = new Date(); //displays current date and time
var time = now.getHours(); // displays the current hour(0-23);
var username;
var greetings;

if(time<12)
//document.write("<h1> Good Afternoon");
	greetings = "Good Morning";

else
{
//time = time - 12;

if(time>12 && time<18)
//document.write("<h1>Good Morning");
greetings = "Good Afternoon";


else
//document.write("<h1>Good Night");
greetings = "Good Evening";
}

if (document.cookie)
{
	var mycookie = unescape(document.cookie); 
	
	var cookietokens = mycookie.split(" ");
	
	username = cookietokens[1];
	
	username = window.prompt("Please enter your name", "Name");

document.cookie = "name=" + escape(name);
}

/*else
{

name = window.prompt("Please enter your name", "Name");

document.cookie = "name=" + escape(name);
}*/

document.writeln("</h2>" + greetings +" </h2>" + name +" ,Welcome to Assignment # 3! </h2>");

document.writeln("<br><br><a href = 'javascript:wrong()'> " + "click here if you're not "+ username + "</a>");

function wrong()
{
document.cookie = "name=null;" + "expires=mon, 07-March-2016 00:08:04 GMT";

location.reload();
}


