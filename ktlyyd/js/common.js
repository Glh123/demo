var navBtn = document.querySelector('.navBtn')
var nav = document.querySelector('.nav')
var close = document.querySelector('.close')


navBtn.onclick = function(){
	nav.style.width = '100%'
	$('.all').css('display','none')
	$('.nav').css('display','block')
}
close.onclick = function(){
	// console.log(1)
	nav.style.width = '0'
	$('.all').css('display','block')
	$('.nav').css('display','none')
}
