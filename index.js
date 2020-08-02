var win=document.getElementsByClassName("window")[0]
var box=document.getElementsByClassName("box")[0];
var btns=document.querySelectorAll(".btns li")


var winW=parseInt(getComputedStyle(win,null).width)
var num=0;
function move(){
    num++;
    if(num>btns.length-1){
        animate(box,{
            "margin-left":-num*winW
        },500,Tween.Linear,function(){
            
            box.style.marginLeft=0;
        })
        num=0;
    }else{
        animate(box,{
            "margin-left":-num*winW
        },500)
    }
        for(var i=0;i<btns.length;i++){
            btns[i].style.background="#5b5b5b"
        }
        btns[num].style.background="#fff"
    
}
    
var t=setInterval(move,2000)

for (let i=0;i<btns.length;i++){
    btns[i].onclick=function(){
        num=i;
        animate(box,{
            "matgin-left":-num*winW
        },500)
        for(var j=0;j<btns.length;j++){
            btns[j].style.background="#5b5b5b"
        }
        btns[num].style.background="#fff"
    }
}

win.onmouseover=function(){
    clearInterval(t)
}
win.onmouseout=function(){
    t=setInterval(move,2000)
}