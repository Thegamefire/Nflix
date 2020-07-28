let conditionF = false
function openNav2_1() {
	alert("t")
   document.getElementById("mySidenav2.1").style.display = "block";
   document.getElementById("box2.1").style.top = "400px";
   document.getElementById("box2.1").style.border = "1px solid #fff";
   document.getElementById("box2.1").style.transform = "scale(1)";
   document.getElementById("row2").style.height = "800px";

   // document.getElementById("box1").style.display = "block";  
}

function closeNav2_1() {
   document.getElementById("mySidenav2.1").style.display = "none";
   document.getElementById("box2.1").style.transform = "scale(1)";
   document.getElementById("box2.1").style.transition = "all 0.7s ease";
   document.getElementById("box2.1").style.border = "none";
   document.getElementById("row2").style.height = "250px";
}
	
	function openNav2_2() {
	alert("c")
   document.getElementById("mySidenav2.2").style.display = "block";
   document.getElementById("box2.2").style.top = "400px";
   document.getElementById("box2.2").style.border = "1px solid #fff";
   document.getElementById("box2.2").style.transform = "scale(1)";
   document.getElementById("row2").style.height = "800px";

   // document.getElementById("box1").style.display = "block";  
}

function closeNav2_2() {
   document.getElementById("mySidenav2.2").style.display = "none";
   document.getElementById("box2.2").style.transform = "scale(1)";
   document.getElementById("box2.2").style.transition = "all 0.7s ease";
   document.getElementById("box2.2").style.border = "none";
   document.getElementById("row2").style.height = "250px";


}
if (conditionF) {
	openNav2_1
	closeNav2_1
	openNav2_2
	closeNav2_2
}