$("#mv-1").click(function(){
    $(".ga-1").css("display", "list-item");
    $(".diary").css("display", "none");
    
}); 
$("#diary-1").click(function(){
    $(".diary").css("display", "list-item");
    $(".ga-1").css("display", "none");
}); 


// 購物頁面JS

let car = []
let allmoney = 0

// 通用函式
function comStatistics(buycar,nbuy){
    for(let i=0;i<buycar.length;i++){
        if(buycar[i].comID === nbuy.comID){
            buycar[i].comQua =  buycar[i].comQua + nbuy.comQua
            buycar[i].money =  buycar[i].money + nbuy.money
            allmoney += nbuy.money

            $(`.${nbuy.comID}`).html(`<div class="carCenter"><p>${nbuy.comName}</p></div><div class="carMoney "><p>${buycar[i].comQua}個</p><p>${buycar[i].money}$</p></div><div class="carCenter"><button id="remove${nbuy.comID}" onclick='removeComm("${nbuy.comID}")'>移除</button></div>`)
            $(".total").html(`<p>總共金額：${allmoney} $</p><button>結算</button>`)

            return console.log("更新");
        }
    }
    car.push(nbuy);
    $(".ul-buy").append(`<li class="li-buy ${nbuy.comID}"><div class="carCenter"><p>${nbuy.comName}</p></div><div class="carMoney "><p>${nbuy.comQua}個</p><p>${nbuy.money}$</p></div><div class="carCenter"><button id="remove${nbuy.comID}" onclick='removeComm("${nbuy.comID}")')>移除</button></div></li>`)
    allmoney += nbuy.money
    $(".total").html(`<p>總共金額：${allmoney} $</p><button>結算</button>`)
    return console.log("新增")
}

function removeComm(comID){
    for(let i=0;i<car.length;i++){
        if(car[i].comID === comID){
            allmoney -= car[i].money
            car.splice(i,1)
            $(`.${comID}`).remove()
            $(".total").html(`<p>總共金額：${allmoney} $</p><button>結算</button>`)
            console.log(car)
        }
    }
}

// 通用函式結束


// 每個商品
$("#comA0001").click(function(){
    comStatistics(car,{comName:"衣服",comID:"A0001",comQua:Number($(".comA0001").val()),money:Number($(".comA0001").val())*200})
    console.log(car)
    window.alert("已加入購物車")
}); 

$("#comA0002").click(function(){
    comStatistics(car,{comName:"褲子",comID:"A0002",comQua:Number($(".comA0002").val()),money:Number($(".comA0002").val())*300})
    console.log(car)
    window.alert("已加入購物車")
}); 

$("#comA0003").click(function(){
    comStatistics(car,{comName:"帽子",comID:"A0003",comQua:Number($(".comA0003").val()),money:Number($(".comA0003").val())*100})
    console.log(car)
    window.alert("已加入購物車")
}); 

$("#comA0004").click(function(){
    comStatistics(car,{comName:"鞋子",comID:"A0004",comQua:Number($(".comA0004").val()),money:Number($(".comA0004").val())*500})
    console.log(car)
    window.alert("已加入購物車")
}); 



// 每個商品結束