let data = ''
let dataList=""
let str = ''
let right = document.querySelector('.container1 .content .right')
right.innerHTML = ' '
let arrData = []     // 右边数据
let titles = document.querySelectorAll('.item .title')
let lists = document.querySelectorAll('.list .items')
let list = document.querySelectorAll('.list')
getData()
async function getData(){
    var request = new XMLHttpRequest();
    var url = '../public/news.json'
    request.open("get", url)
    request.send(null)
    request.onload = function(res){
        if(request.status  == 200){
            // request.JSON
            data= JSON.parse(request.responseText)
            dataList = data[Object.keys(data)[0]]
            console.log(dataList)
            dataright()
        }
    }
    return data;
}


for(let i=0;i<titles.length;i++){
    titles[i].onclick = function(){
        let kind = this.dataset.kind
        dataList = data[kind]
        console.log(kind,dataList)
        arrData = []
        right.innerHTML = " "
        console.log(typeof titles[i].className)
        setBgc1(i)           // 改变左边背景色
        dataright()         //拿取每个种类的所有数据
    }
}
for(let i=0;i<lists.length;i++){
    lists[i].onclick = function(){
        console.log(dataList)
        let kind = this.dataset.kind
        arrData = dataList[kind]
        str = ''
        setBgc2(i)           // 改变左边背景色
        console.log(arrData == false)
        if(arrData == false){
            str = `<h1>没有符合的结果！</h1>`
            right.innerHTML = str
            console.log(111111111)
            return
        }
        for(let i=0;i<arrData.length;i++){
            str += `
                <div class="item">
                    <div class="top">
                        <div class="lLeft">
                            <img src="${arrData[i].imgUrl}" alt="">
                        </div>
                        <div class="lRight">
                            <p>${arrData[i].title}</p>
                            <p><span>发布日期：</span><span>${arrData[i].date}</p>
                        </div>
                    </div>
                    <div class="container1_bottom">阅读正文</div>
                    <div class="hr"></div>
                </div>
            `
        }
        // console.log(str)
        right.innerHTML = str
        // console.log(kind,dataList)
        // arrData = []
        // right.innerHTML = " "
        // console.log(typeof lists[i].className)
        console.log(arrData)
        
        // dataright()         //拿取每个种类的所有数据
    }
}
function setBgc1(num){
    for(let i =0;i<titles.length;i++){
        titles[i].style.backgroundColor = "white"
        titles[i].style.color = '#dd9933'
        list[i].style.display = 'none' 
    }
    for(let i =0;i<lists.length;i++){
        lists[i].style.backgroundColor = "white"
        lists[i].style.color = '#dd9933'
    }
    titles[num].style.backgroundColor = "#DD9933"
    titles[num].style.color = 'white'
    list[num].style.display = 'flex'
}
function setBgc2(num){
    for(let i =0;i<lists.length;i++){
        lists[i].style.backgroundColor = "white"
        lists[i].style.color = '#dd9933'
    }
    for(let i =0;i<titles.length;i++){
        titles[i].style.backgroundColor = "white"
        titles[i].style.color = '#dd9933'
    }
    lists[num].style.backgroundColor = "#DD9933"
    lists[num].style.color = 'white'
    titles[num].style.backgroundColor = "white"
    titles[num].style.color = '#dd9933'
}


function dataright(){
    // for(let i=0;i)
    // 拿取每一种的所有数据
    let arr = Object.keys(dataList)
    
    str = ''
    // console.log(right.innerHTML,'++++++')
    for(let i =0;i<arr.length;i++){
        for(let j = 0;j<dataList[arr[i]].length;j++){
            arrData.push(dataList[arr[i]][j])
        } 
    }
    // console.log('搜友',arrData)
    if(arrData==false){
        str = `<h1>没有符合的结果！</h1>`
        right.innerHTML = str
        return
    }
    for(let i=0;i<arrData.length;i++){
        str += `
            <div class="item">
                <div class="top">
                    <div class="lLeft">
                        <img src="${arrData[i].imgUrl}" alt="">
                    </div>
                    <div class="lRight">
                        <p>${arrData[i].title}</p>
                        <p><span>发布日期：</span><span>${arrData[i].date}</p>
                    </div>
                </div>
                <div class="container1_bottom">阅读正文</div>
                <div class="hr"></div>
            </div>
        `
    }
    // console.log(str)
    right.innerHTML = str
}





