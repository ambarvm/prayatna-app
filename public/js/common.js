M.AutoInit();

var mybutton = document.getElementById('myBtn');

window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

 $(document).ready(function(){
    $('select').formSelect();
  });
$(document).ready(function(){
    $('.datepicker').datepicker();
  });
$(document).ready(function(){
    $('.timepicker').timepicker();
  });

document.getElementById("player1").style.display="none";
document.getElementById("player2").style.display="none";
function sports()
{
var x=document.getElementById("player").value;
if(x=="3"||x=="2"||x=="4")
{
document.getElementById("player1").style.display="block";
document.getElementById("player2").style.display="block";
}
else
{
document.getElementById("player1").style.display="none";
document.getElementById("player2").style.display="none";
}

}
