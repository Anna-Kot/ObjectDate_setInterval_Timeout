const sel = selector => document.querySelector(selector);
setInterval( () => {
    let dd = new Date();
    let year = dd.getFullYear();
    let mon =dd.getMonth()+1;
    let day = dd.getDate();
    let h = dd.getHours();
    let m = dd.getMinutes();
    let s = dd.getSeconds();
    if (h<10) h ='0'+h;
    if (m<10) m ='0'+m;
    if (s<10) s ='0'+s;
    if (day<10) day ='0'+day;
    if (mon<10) mon ='0'+mon;
    sel('.date').innerHTML = `${day} . ${mon} . ${year}`
    sel('.time').innerHTML = `${h} : ${m} : ${s}`
});


let hours =0;
let mins =0;
let seconds =0;
let milisec=0
let timex;

document.querySelector('#start').addEventListener('click', function(){
    startTimer();
    sel('#start').disabled = true;
    sel('#stop').disabled = false;
    sel('#loop').disabled = false;
});

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(timex);
    sel('#start').disabled = false;
    sel('#stop').disabled = true;
    sel('#loop').disabled = false;
    sel('#reset').disabled = false;
});

document.querySelector('#reset').addEventListener('click', function(){
    hours =0;      
    mins =0;      
    seconds =0;
    milisec=0
    document.querySelector('#hours').innerHTML='00';
    document.querySelector('#mins').innerHTML='00';
    document.querySelector('#seconds').innerHTML='00';
    document.querySelector('#milisec').innerHTML='00';
    document.querySelector('.middle_right').innerHTML='';
    sel('#start').disabled = false;
    sel('#stop').disabled = true;
    sel('#loop').disabled = true;
});
document.querySelector('#loop').addEventListener('click', function(){
    let k= document.createElement('h3')
    if(hours<10){
        if(mins<10){
            if(seconds<10){
                if(milisec<10){
                    k.textContent = `0${hours}: 0${mins}: 0${seconds}: 0${milisec}`
                }
                k.textContent = `0${hours}: 0${mins}: 0${seconds}: ${milisec}`
            }
            else{
                if(milisec<10){
                    k.textContent = `0${hours}: 0${mins}: ${seconds}: 0${milisec}`
                }
                k.textContent = `0${hours}: 0${mins}: ${seconds}: ${milisec}`
            }
        }
        else{
            if(seconds<10){
                if(milisec<10){
                    k.textContent = `0${hours}: ${mins}: 0${seconds}: 0${milisec}`
                }
                k.textContent = `0${hours}: ${mins}: 0${seconds}: ${milisec}`
            }
            else {
                if(milisec<10){
                    k.textContent = `0${hours}: ${mins}: ${seconds}: 0${milisec}`
                }
                k.textContent = `0${hours}: ${mins}: ${seconds}: ${milisec}`
            }
        }
    }
    else {
        if(milisec<10){
            milisec='0'+milisec
        }
    k.textContent = `${hours}:${mins}:${seconds}:${milisec}`
    }
    document.querySelector('.middle_right').append(k);
});
function startTimer(){
  timex = setTimeout(function(){
        milisec++
        if(milisec>99) {
            milisec=0;
            seconds++;
            if(seconds >59){
                seconds=0;
                mins++;
                if(mins>59) {
                    mins=0;
                    hours++;
                    if(hours <10) {
                        document.querySelector('#hours').textContent='0'+hours;
                    } 
                    else{
                        document.querySelector('#hours').textContent=hours;
                    }
                }              
                if(mins<10){   
                    document.querySelector('#mins').textContent='0'+mins;
                }       
                else{
                    document.querySelector('#mins').textContent=mins; 
                }
            }    
            if(seconds <10) {
                document.querySelector('#seconds').textContent='0'+seconds;
            } 
            else {
                document.querySelector('#seconds').textContent=seconds;
            }
        }
        if(milisec <10) {
            document.querySelector('#milisec').textContent='0'+milisec;
        } 
        else {
            document.querySelector('#milisec').textContent=milisec;
        }
      startTimer();
    },9);  //у завданні написано, що мілісекунди не обов'язково реалізовувати. у мене мілісекунди з затримкою 40мілісекудн (через те, що здійснюється затримка)
}


sel('.plus').addEventListener('click', function() {
    let k =+sel('.timer2').innerHTML+1
    if(+sel('.timer2').innerHTML<9 && +sel('.timer2').innerHTML>=0) {
        sel('.timer2').innerHTML = '0'+k
    }
    else {
        sel('.timer2').innerHTML = k;
    }
})
sel('.minus').addEventListener('click', function() {
    if(sel('.timer2').innerHTML>0){
        let k =+sel('.timer2').innerHTML-1
        if(+sel('.timer2').innerHTML<=10 && sel('.timer2').innerHTML>0) {
            sel('.timer2').innerHTML = '0'+k
        }
        else {
            sel('.timer2').innerHTML = k;
        }
    }
})
let left_number=sel('.timer2').innerHTML;

let right_number=0;
let timer_down;
document.querySelector('#start2').addEventListener('click', function(){
    if(+sel('.timer2').innerHTML<10) {
        sel('#left_number').innerHTML='0'+(+sel('.timer2').innerHTML)
    }
    else {
    sel('#left_number').innerHTML=+sel('.timer2').innerHTML
    }
    sel('#left_number').innerHTML=sel('.timer2').innerHTML
    start2Timer();
    sel('#start2').disabled = true;
    sel('#stop2').disabled = false;
    sel('#reset2').disabled = true;
});

document.querySelector('#stop2').addEventListener('click', function(){
    clearTimeout(timer_down);
    // sel('#left_number').innerHTML=left_number
    sel('#start2').disabled = false;
    sel('#stop2').disabled = true;
    sel('#reset2').disabled = false;
});

document.querySelector('#reset2').addEventListener('click', function(){
    left_number =0;
    right_number=0;     
    document.querySelector('#left_number').innerHTML='00';
    document.querySelector('#right_number',).innerHTML='00';
});
function start2Timer(){
    left_number = sel('#left_number').innerHTML;
    timer_down = setTimeout(function(){
        right_number--;
        if(right_number<0){
            right_number=59
            left_number--;
            if (left_number < 10) {
                left_number = "0" + left_number;
            }
            sel('#left_number').innerHTML=left_number;
            if(left_number==0){
                location.reload()
            }
        }
        if (right_number < 10) {
            right_number = "0" + right_number;
        }
        sel('#right_number').innerHTML = right_number;
        start2Timer();
    },200);
}
        





