let list = document.querySelector('.container1 .content .left')
let arr = [
    {title:'免费预订电话：400 6622 237',font2:[]},
    {title:'公司总部',font2:['云南康藤旅游投资有限公司','电话：0871-65375236','电话：0871-65375236','传真：0871-65375236','邮箱：info@vinetreetents.com']},
    {title:'丽江',font2:['丽江格拉丹旅游投资有限公司','电话： 0888-5122828','传真： 0888-5122828','邮箱： l.su@vinetreetents.com']},
    {title:'保山',font2:['保山康藤生态旅游发展有限公司','电话：0871-65375236','传真：0871-65375236','邮箱：info@vinetreetents.com']},
    {title:'',font2:['媒体联络：e.dong@vinetreetents.com','品牌合作：k.tang@vinetreetents.com','人事招聘：k.fang@vinetreetents.com','联系场地与活动赞助info@vinetreetents.com']}
]

let str = ''
for(let i =0;i<arr.length;i++){
    
    let ss = ''
    for(let j =0;j<arr[i].font2.length;j++){
        ss += `<div class="font2">${arr[i].font2[j]}</div>`
    }
    ss = `<div class="font1">${arr[i].title}</div>` + ss
    str += `<div class="item">${ss}</div>` 
}
list.innerHTML = str


