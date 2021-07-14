var startTime_minutes=document.getElementById('startTime-minutes');
var breakTime_minutes=document.getElementById('breakTime-minutes');
var pause=document.getElementById('pause');
var reset=document.getElementById('reset');
var start=document.getElementById('start');
var minutes=document.getElementById('minutes');
var seconds=document.getElementById('seconds');
var session =document.getElementById('session');



var intial_1=25;
var intial_2=5;


var sessionTime=intial_1*60;
var breakTime=intial_2*60;
var min;
var sec;


function display(sessionTime){
    var min=Math.floor(sessionTime/60);
    var sec=sessionTime-(min*60);
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec : sec;
    minutes.innerText=min;
    seconds.innerText=sec;

}


function updateTime(sTime,bTime){
sessionTime=sTime*60;
breakTime=bTime*60;
display(sessionTime);
}

document.body.addEventListener("click",function(e){
    if(e.target.nodeName=="BUTTON"){
        if(e.target.id=='startTime-minus'){
            startTime_minutes.innerText=parseInt(startTime_minutes.innerText)===1?1:parseInt(startTime_minutes.innerText)-1;
            updateTime(startTime_minutes.innerHTML, breakTime_minutes.innerHTML);
        }
        if(e.target.id=='startTime-plus'){
            startTime_minutes.innerText=parseInt(startTime_minutes.innerText)+1;
            updateTime(startTime_minutes.innerHTML, breakTime_minutes.innerHTML);
        }
        if(e.target.id=='breakTime-minus'){
            breakTime_minutes.innerText=parseInt(breakTime_minutes.innerText)===1?1:parseInt(breakTime_minutes.innerText)-1;
            updateTime(startTime_minutes.innerHTML, breakTime_minutes.innerHTML);
        }
        if(e.target.id=='breakTime-plus'){
            breakTime_minutes.innerText=parseInt(breakTime_minutes.innerText)+1;
            updateTime(startTime_minutes.innerHTML, breakTime_minutes.innerHTML);
        }
       
    }
})
start.addEventListener("click",function (e){
    e.preventDefault();
    abc();
})

function abc(sec){
    isPaused=false;
    session.innerText='SESSION';
    set=setInterval(function(){
       if(!isPaused){
    min=parseInt(sessionTime/60,10);
    sec=parseInt(sessionTime%60,10);
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec : sec;
    if(--sessionTime<0){
   
           clearInterval(set);
           breakFun();
    }
    minutes.innerText=min;
    seconds.innerText=sec;
    minutes.setAttribute('style','color:#00a0b0;');
    seconds.setAttribute('style','color:#00a0b0;');
    document.getElementById('colon').setAttribute('style','color:#00a0b0;');
   }
   },1000);
}

function breakFun(){
    isPaused=false;
    session.innerText='BREAK';
    set=setInterval(function(){
        if(!isPaused){
        min=parseInt(breakTime/60,10);
        sec=parseInt(breakTime%60,10);
        min = min < 10 ? "0" + min: min;
        sec = sec < 10 ? "0" + sec : sec;
        if(--breakTime<0){
 
            clearInterval(set);
            updateTime(startTime_minutes.innerHTML, breakTime_minutes.innerHTML);
            abc();
         }
         minutes.innerText=min;
        seconds.innerText=sec;
        minutes.setAttribute('style','color:#bc5c3d;');
        seconds.setAttribute('style','color:#bc5c3d;');
        document.getElementById('colon').setAttribute('style','color:#bc5c3d;');
        }
    },1000);
}
pause.addEventListener("click",function(e){
    e.preventDefault();
    isPaused=true;
    clearTimeout(set);

})

reset.addEventListener("click",function(e){
    e.preventDefault();
     clearTimeout(set);
 
    updateTime(25,5);
    breakTime_minutes.innerText='5';
    startTime_minutes.innerText='25';

})



