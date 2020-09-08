let lbImg = $('.lb_imgs')
let lb = $('.lb')
let btns = $('.lb_btn>a')[0]
// console.log(btns)
// let num = getComputedStyle(lb[0],null).width
// let width = getComputedStyle(lbImg[0],null).left
// let left = getComputedStyle(lbImg[0],null).left / num * 100

// console.log(left)
let a = 0
let num = 1
let width = getComputedStyle(lb[0], null).width
let time = 0
setTime()

function setTime() {
	time = setInterval(function() {

		// let left = getComputedStyle(lb[0],null).left
		// let left = lb.left()
		if (num == 6) {
			num = 0
		}
		lbImg.animate({
			left: -parseInt(width) * num + (num + 1)
		}, 1500)
		$('.lb_btn > a').css({
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		})
		$('.lb_btn > a:eq(' + num + ')').css({
			backgroundColor: 'black'
		})
		num++
	}, 2500)
}
$('.lb_btn > a').each(function(index, obj) {
	$(obj).click(function() {
		console.log(index)
		lbImg.finish()
		// clearInterval(time)
		num = index
		lbImg.animate({
			left: -num * parseInt(width) + (num + 1)
		}, 800)
		$('.lb_btn > a').css({
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		})
		$('.lb_btn > a:eq(' + num + ')').css({
			backgroundColor: 'black'
		})
		// setTime()
	})
})
window.onblur = function() {
	clearInterval(time)
}
window.onfocus = function() {
	setTime()
}
