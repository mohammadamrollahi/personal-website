var w11=/[^a-z]/i
var w12=/[^ا-ی]/
var count1;
function wr1()
{
	count1=document.getElementById("nameinput").value;
	if(w11.test(count1) && w12.test(count1))
		document.getElementById("wrongtxt-1").innerHTML="*فک کنم اسمتو اشتباه زدی!"
	else
		document.getElementById("wrongtxt-1").innerHTML=""
}
var w21=/\D/

var count2;
function wr2()
{
	count2=document.getElementById("phoninput").value;
	if(w21.test(count2) )
		document.getElementById("wrongtxt-2").innerHTML="*فک کنم شمارتو اشتباه زدی!"
	else
		document.getElementById("wrongtxt-2").innerHTML=""
}
var w31=/[@]/



var count3;
function wr3()
{
	count3=document.getElementById("emailinput").value;
	
	
	if(w31.test(count3))
document.getElementById("wrongtxt-3").innerHTML=""
	else
		
			document.getElementById("wrongtxt-3").innerHTML="*فک کنم ایمیلتو اشتباه زدی!"
	
}
var w41=/[^a-z]/i
var w42=/[^ا-ی]/
var count4;
function wr4()
{
	count4=document.getElementById("knowinput").value;
	if(w41.test(count4) && w42.test(count4))
		document.getElementById("wrongtxt-4").innerHTML="*فک کنم اسم معرفتو اشتباه زدی!"
	else
		document.getElementById("wrongtxt-4").innerHTML=""
}