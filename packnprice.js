$("#evoLogo").mouseenter(function (){
	// $("#dropdown").css("-webkit-animation-name", "dropDown");
	$("#dropdown").css("height", "auto");
	$("#evoLogo").css("background-image", "url(evoLogo.png)");
});

$("#dropdown2").css("background-color", "#191919");

//Dropdown menu functionality
$("#dropdown").mouseleave(function (){
	$("#dropdown").css("height", "");
	$("#evoLogo").css("background-image", "");
});

$("#dropdown1").mouseenter(function (){
	$("#dropdown1").css("background-color", "#191919");
});
$("#dropdown1").mouseleave(function (){
	$("#dropdown1").css("background-color", "");
});

$("#dropdown2").mouseenter(function (){
	$("#dropdown2").css("background-color", "#191919");
});
$("#dropdown2").mouseleave(function (){
	$("#dropdown2").css("background-color", "#191919");
});

$("#dropdown3").mouseenter(function (){
	$("#dropdown3").css("background-color", "#191919");
});
$("#dropdown3").mouseleave(function (){
	$("#dropdown3").css("background-color", "");
});

$("#dropdown4").mouseenter(function (){
	$("#dropdown4").css("background-color", "#191919");
});
$("#dropdown4").mouseleave(function (){
	$("#dropdown4").css("background-color", "");
});

$("#dropdown5").mouseenter(function (){
	$("#dropdown5").css("background-color", "#191919");
});
$("#dropdown5").mouseleave(function (){
	$("#dropdown5").css("background-color", "");
});

//Background image loop
var currentImage = 0;
setInterval(function(){
	currentImage ++;
	if (currentImage > 9)
	{
		currentImage = 0;
	}
	var url = "url(Images/" + currentImage + ".JPG)";
	$(".body").css("background-image", url);
}, 8000);	