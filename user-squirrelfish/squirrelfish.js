//! Copyright 2014 Jeremiah Wibberding (simjs.net) all rights reserved

function spin () {
	$('#spinThis').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
}
function spin1 () {
	$('#spinThis1').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
}
function spin2 () {
	$('#spinThis2').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
}
function spin3 () {
	$('#spinThis3').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
}
function fadeOut () {
	$("#fadeThis").fadeOut("slow");
}
function fadeOut1 () {
	$("#fadeThis1").fadeOut("slow");
}
function fadeOut2 () {
	$("#fadeThis2").fadeOut("slow");
}
function fadeOut3 () {
	$("#fadeThis3").fadeOut("slow");
}
function switchSizeLarge () {
	$("#sizeThisL").animate ({
		padding:'12px'
	});
}
function switchSizeMedium () {
	$("#sizeThisM").animate ({
		padding:'6px'
	});
}
function switchSizeSmall () {
	$("#sizeThisS").animate ({
		padding:'6px'
	});
}
function switchSizeLarge1 () {
	$("#sizeThisL1").animate ({
		padding:'12px'
	});
}
function switchSizeMedium1 () {
	$("#sizeThisM1").animate ({
		padding:'6px'
	});
}
function switchSizeSmall1 () {
	$("#sizeThisS1").animate ({
		padding:'6px'
	});
}
function switchSizeLarge2 () {
	$("#sizeThisL2").animate ({
		padding:'12px'
	});
}
function switchSizeMedium2 () {
	$("#sizeThisM2").animate ({
		padding:'6px'
	});
}
function switchSizeSmall2 () {
	$("#sizeThisS2").animate ({
		padding:'6px'
	});
}
function switchSizeLarge3 () {
	$("#sizeThisL3").animate ({
		padding:'12px'
	});
}
function switchSizeMedium3 () {
	$("#sizeThisM3").animate ({
		padding:'6px'
	});
}
function switchSizeSmall3 () {
	$("#sizeThisS3").animate ({
		padding:'6px'
	});
}
function disable () {
	$("#disableThis").animate({
		opacity:'0.5'
	});
	$("#disableThis").off();
	$("#disableThis").css("cursor","default");
	$("#disableThis").css("cursor","default");
	$("#disableThis").hover(function(){
    	$("#disableThis").css("background-color","white");
    });
}
function disable1 () {
	$("#disableThis1").animate({
		opacity:'0.5'
	});
	$("#disableThis1").off();
	$("#disableThis1").css("cursor","default");
	$("#disableThis1").css("cursor","default");
	$("#disableThis1").hover(function(){
    	$("#disableThis1").css("background-color","white");
    });
}
function disable2 () {
	$("#disableThis2").animate({
		opacity:'0.5'
	});
	$("#disableThis2").off();
	$("#disableThis2").css("cursor","default");
	$("#disableThis2").css("cursor","default");
	$("#disableThis2").hover(function(){
    	$("#disableThis2").css("background-color","white");
    });
}
function disable3 () {
	$("#disableThis3").animate({
		opacity:'0.5'
	});
	$("#disableThis3").off();
	$("#disableThis3").css("cursor","default");
	$("#disableThis3").css("cursor","default");
	$("#disableThis3").hover(function(){
    	$("#disableThis3").css("background-color","white");
    });
}

