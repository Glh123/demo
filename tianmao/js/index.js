let nav_title = document.getElementById('nav_title')
let contents = document.getElementsByClassName('content')  // 获取所有内容
let scrollTop = document.documentElement.scrollTop

let conetntsTopArr = (function () {        // 所有内容的上高度
    let arr = []
    for (let i = 0; i < contents.length; i++) {
        arr.push(contents[i].offsetTop)
    }
    return arr;
})()
console.log(conetntsTopArr)

// 图片懒加载

let allImg = document.getElementsByTagName('img')
let allImgTops = (function () {
    let arr = []

    for (let i = 0; i < allImg.length; i++) {
        arr.push({
            name: allImg[i],
            top: allImg[i].offsetTop,
            attr: allImg[i].getAttribute('attr')
        })
    }
    arr.sort((a, b) => {
        return a.top - b.top
    })
    return arr
})()
imgSlow(scrollTop + window.innerHeight + 500)
// console.log(allImgTops)
function imgSlow(temp) {
    let a = 0;
    let b = 0;
    if (allImgTops.length == 0) {
        console.log(allImgTops.length)
        return
    }
    console.log('++++',allImgTops)
    while (allImgTops.length!=0&&allImgTops[0].top < temp) {
        allImgTops[0].name.setAttribute('src', allImgTops[0].attr)
        allImgTops.shift()
    }
    // for(let i=0;i<allImgTops.length;i++){
    //     if(allImgTops[i].top<temp){
    //         // a = i
    //         allImgTops[i].name.setAttribute('src',allImgTops[i].attr)
    //     }else{
    //         b = i
    //         break;
    //     }
    // }
    // allImgTops.slice(b)
    console.log(allImgTops)
}


// 左边tabar
let tabarsLeft = document.getElementsByClassName('tabar_left')
let tabarsRight = document.getElementsByClassName('tabar_right')[0]
// console.log(tabars)
tabHover()
function tabHover() {
    for (let i = 0; i < tabarsLeft.length; i++) {
        tabarsLeft[i].onmouseover = function () {
            tabarsRight.style.display = 'block'
            let a = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            let c = Math.floor(Math.random() * 256)
            let bgColor = `rgb(${a},${b},${c})`
            tabarsRight.style.background = bgColor
        }
        tabarsLeft[i].onmouseout = function () {
            tabarsRight.style.display = 'none'

        }
    }
}

// 左边导航滚动颜色和出现

let liArr = document.getElementsByClassName('nav_li')  //左边导航 a
console.log(liArr)
let nav_bar = document.getElementById('nav_bar')   // 左边导航  ul
// let nav_bar_top  = nav_bar.offsetTop
let bgcArr = ['#64C333', '#ff0036', '#EA5F8D', '#0AA6E8', '#64C333', '#F15453', '#19C8A9', '#ff0036']

// liArr[1].style.background = 'rgba(0, 0, 0, 0.6)'
// console.log(liArr)
let isBgc = false
// let liTemp = 0
console.log(document.documentElement.scrollTop, conetntsTopArr[0])
// nav_bar.style.display = document.documentElement.scrollTop > conetntsTopArr[0] ? 'flex' : 'none'  
function isNavBar(temp) {
    if (conetntsTopArr[0] < temp) {
        nav_bar.style.height = '370px'
        nav_bar.style.width = '36px'
    } else {
        nav_bar.style.height = '0'
        nav_bar.style.width = '0'
    }
}
navLeftBgcClick()
function navLeftBgcClick() {              //点击变色
    for (let i = 0; i < liArr.length; i++) {
        liArr[i].onclick = function () {
            liArr[i].style.background = bgcArr[i]
            allBgc(i)
        }
    }
}

function navLeftBgc(temp) {             //滑动变色

    // isBgc = temp > 600 ? true : false
    for (let i = 0; i < conetntsTopArr.length; i++) {
        
        if(i >= liArr.length-1){
            allBgc(i)
            return
        }else{
            if (conetntsTopArr[i] <= temp && temp < conetntsTopArr[i + 1]) {
                // console.log(111)
                // debugger
                allBgc(i)
                break
            }
        }
    }   
}
//设置 背景色
function allBgc(liTemp) {
    console.log(111)
    for (let i = 0; i < liArr.length; i++) {
        console.log(111)
        // debugger
        liArr[i].style.background = 'rgba(0, 0, 0, 0.6)'
    }
    // console.log(isBgc)

    console.log(liTemp,liArr[liTemp])
    liArr[liTemp].style.background = bgcArr[liTemp]

}

// 滚动条滑动
document.onscroll = function () {
    scrollTop = document.documentElement.scrollTop
    // 左边导航
    imgSlow(scrollTop)

    isNavBar(scrollTop + 300)    //  左边导航是否出现
    navLeftBgc(scrollTop)  //  加背景色
    // 顶部搜索
    if (scrollTop + 200 > conetntsTopArr[0]) {
        nav_title.style.height = '50px'
    } else {
        nav_title.style.height = '0'
    }

}

//选项卡
let s_items = document.getElementsByClassName('s_items')
let c_items = document.getElementsByClassName('c_items')
let temp = 0
let len = s_items.length
// console.log(s_items)
// document.onmouseenter
for (let i = 0; i < len; i++) {
    s_items[i].onclick = function () {
        temp = i
        console.log(1)
        selectContent(s_items, c_items, i)
    }
    s_items[i].onmouseover = function () {
        temp = i
        console.log(1)
        selectContent(s_items, c_items, i)
    }
}

setInterval(function () {

    if (temp > len - 1) {
        temp = 0
    }
    selectContent(s_items, c_items, temp)
    temp++
}, 1000)


// 选项卡函数   参数：哪个要变
function selectContent(element1, element2, num) {
    for (let j = 0; j < len; j++) {
        element1[j].style.background = 'white'
        element1[j].style.color = 'black'
        element2[j].classList.add('i_hidden')
    }
    element1[num].style.background = 'green'
    element1[num].style.color = 'white'
    element2[num].classList.remove('i_hidden')
}

//  轮播

let box_img = document.getElementById('box_img')        //
let btns_img = document.getElementsByClassName('btns_img')
let windowWidth = document.documentElement.clientWidth    //  浏览器视口宽度
let len1 = btns_img.length
let num = 1
let w = 995    // 轮播 位移的宽度
// 1240px   995px
// 判断是哪个宽度
// let box_img_last = box_img.firstElementChild
// console.log(typeof box_img_last)
// box_img.appendChild(box_img_last)
// console.log(box_img)
if (windowWidth >= 1260) {
    w = 1240
}
window.onresize = function () {
    windowWidth = document.documentElement.clientWidth
    if (windowWidth >= 1260) {
        w = 1240
    } else {
        w = 995
    }
};
for (let i = 0; i < len1; i++) {
    btns_img[i].onclick = function () {
        num = i
        // console.log(222)
        for (let j = 0; j < len1; j++) {
            btns_img[j].style.background = '#000'
        }
        btns_img[num].style.background = 'white'
        left = -w * num
        box_img.style.left = left + 'px'
    }
}
let lbTime = setInterval(function () {
    // 获取元素的 left
    let left = parseInt(getComputedStyle(box_img, null).left)

    if (num == btns_img.length) {
        num = 0
        left = w
    }
    for (let j = 0; j < len1; j++) {
        btns_img[j].style.background = '#000'
    }
    btns_img[num].style.background = 'white'
    lb(left)
    num++
    // console.log(left)
}, 2000)

function lb(left) {
	let temp = 1
	let l = w / 3
	let time = setInterval(function(){
		
		left -= l
		box_img.style.left = left + 'px'
		if(temp==3){
			clearInterval(time)
		}
		temp++
	},180)

}

