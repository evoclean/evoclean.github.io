$("#evoLogo").mouseenter(function (){
	// $("#dropdown").css("-webkit-animation-name", "dropDown");
	$("#dropdown").css("height", "auto");
	$("#evoLogo").css("background-image", "url(evoLogo.png)");
});
$("#dropdown").mouseleave(function (){
	// $("#dropdown").css("webkit-animation-name", "");
	$("#dropdown").css("height", "");
	$("#evoLogo").css("background-image", "");
});

$("#dropdownHome").mouseenter(function (){
	$("#dropdownHome").css("background-color", "#191919");
	$("#dropdownHome").css("color", "#A9A9AB !important");
});
$("#dropdownHome").mouseleave(function (){
	$("#dropdownHome").css("background-color", "");
});

$("#dropdownContact").mouseenter(function (){
	$("#dropdownContact").css("background-color", "#191919");
});
$("#dropdownContact").mouseleave(function (){
	$("#dropdownContact").css("background-color", "");
});

$("#dropdownAbout").mouseenter(function (){
	$("#dropdownAbout").css("background-color", "#191919");
});
$("#dropdownAbout").mouseleave(function (){
	$("#dropdownAbout").css("background-color", "");
});
