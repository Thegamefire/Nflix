// JavaScript Document
let conditionFa = false
let user = "nope"
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

if (id === 22666) {
	user = "Nathan"
} else {
	if (id === 13245) {
		user = "Admin"
	} else {
	if (id === null) {
		window.location = "../index.html"
	}
}
} 


if (conditionFa) {
	alert(user)
}