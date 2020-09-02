// JavaScript Document
document.getElementById("submitbutton").addEventListener("click", submit)

function submit() {
let username = document.getElementById("usrInput").value
let password = document.getElementById("pswInput").value
alert(username+password)
	if (username === "NathanOnraet" && password === "TGFisCOOL") {
		window.location = "lggdIn/lggdIn.html?id=22666"
	}
}