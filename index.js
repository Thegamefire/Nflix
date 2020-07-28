function openNav(x, y, z) {
   document.getElementById(x).style.display = "block";
   document.getElementById(y).style.top = "400px";
   document.getElementById(y).style.border = "1px solid #fff";
   document.getElementById(y).style.transform = "scale(1)";
   document.getElementById(z).style.height = "800px";

   // document.getElementById("box1").style.display = "block";
}

function closeNav() {
   document.getElementById("mySidenav").style.display = "none";
   document.getElementById("box1").style.transform = "scale(1)";
   document.getElementById("box1").style.transition = "all 0.7s ease";
   document.getElementById("box1").style.border = "none";
}
