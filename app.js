// time
function time(){
    var date=new Date();
  
    var hours=date.getHours(); //0-24
    var min=date.getMinutes();
    var sec=date.getSeconds();
   
    if(hours=="12"){
        hr=12;
    }else if(hours=="24")
    {
         hr=0;
    }else{
        hr=hours%12;
    }
    
    
    var ampm=hours<12?"AM":"PM";

    
    if(hours<10){
        hr="0"+hours;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    var cat=hr+":"+min+":"+sec+" "+ampm;
    document.getElementById("clock").innerText=cat;
}

setInterval(time,1000)



