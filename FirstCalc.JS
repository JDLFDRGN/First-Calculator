let num=0;
let x=document.querySelectorAll("input")[0];
let val='';
let leng;
let totl=false;
function on(){
    num=1-num;
    if(num==1){
        x.value=0;
        totl=false;
    }else{
        x.value="";
        val='';
    }
}
function inp(k){
    if(num==1){
    val+=k.value;
    x.value=val;
    }else{
        x.value="";
        val='';
    }
 }
function clr(){
    if(num==1){
        x.value=0;
        val='';
        totl=false;
    }else{
        val='';
    }
}
function tot(){
    if(num==1){
        x.value=eval(val);
        val=eval(val);
        totl=true;
    }else{
        x.value='';
        val='';
    }
}
function del(){
    
    if(num==1){
        if(totl==false){
    if(val.length-1>0){
        leng=val.substr(0,val.length-1);
        x.value=leng;
        val=leng;

    }else{
        x.value=0;
        val='';
    }}
}else{
    x.value='';
    val='';
}
}
