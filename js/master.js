var audioElementIn = document.createElement('audio');
var audioElementOut = document.createElement('audio');
var tamanho = 300;
$(function(){
	$("*").tipTip({ delay: 250});
	audioElementIn.setAttribute('src', 'Swish.mp3');
	audioElementOut.setAttribute('src', 'out.mp3');
	
	$.get();	
});

$( ".circle" ).mouseover(function() {
	audioElementIn.play();
	audioElementOut.pause();
	audioElementOut.currentTime = 0
 });
 
 $( ".circle" ).mouseout(function() {
	audioElementOut.play();
	audioElementIn.pause();
	audioElementIn.currentTime = 0
 });
  
  
var spot = document.getElementById('spot');
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
 
function moverObagulho(e){
    var x = 0;
    var y = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY){
        x = e.pageX;
        y = e.pageY;
    }
    else if (e.clientX || e.clientY){
        x = e.clientX + document.body.scrollLeft;
        y = e.clientY + document.body.scrollTop;
    }
   
    if (navigator.userAgent.match('AppleWebKit')) {
        var style = '-webkit-gradient(radial, '+x+' '+y+', 0, '+x+' '+y+', '+tamanho+', from(rgba(0,0,0,0)), to(rgba(0,0,0,0.8)), color-stop(0.8, rgba(0,0,0,0)))';
    } else {
		var style = '-moz-radial-gradient('+x+'px '+y+'px 45deg,circle closest-side,transparent 0,rgba(0, 0, 0, 0) '+(tamanho-30)+'px,rgba(0, 0, 0, 0.8) '+(tamanho+50)+'px)';
    }
    spot.style.backgroundImage = style;	
}
 
window.onload = function() {
    window.onmousemove = moverObagulho;
}

function callback(event){
    var roda = (event.wheelDelta) ? event.wheelDelta : -(event.detail || event.deltaY);
		if(roda<0 && tamanho<=300 && tamanho >=100){
			tamanho -=20;
		} else if(  tamanho<300 ){
			tamanho +=20;
		}
		moverObagulho();
}
var event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
window.addEventListener(event, callback);
