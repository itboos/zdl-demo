(function(win){
    var ruleBtn=document.querySelector(".ruleBtn"),
    	ruleMask=document.querySelector(".mask"),
    	closeBtn=document.querySelector(".closeBtn"),
    	isRuleShow=false;
    ruleBtn.onclick=function(){
        /*ruleMask.style.display="block";*/
		ruleMask.style.display="flex";
    }
    
    closeBtn.onclick=function(){
       ruleMask.style.display="none";
    };

     ruleMask.onclick=function(){
       ruleMask.style.display="none";
    };
    
    var hour=document.querySelector(".hour"),
        min=document.querySelector(".min"),
        sec=document.querySelector(".sec"),
        endTime=Math.round (1486915199000/1000 ),//2-12 23:59
        now=Math.round(new Date().getTime()/1000),
        timeId=null;
    
    timeId=setInterval(getTime,1000);

    function getTime(){
        now++;
        if(endTime > now){
            var dur=endTime-now;
            hour.innerHTML=setZero( Math.floor((dur / 3600) ) )+" 时";
            min.innerHTML=setZero(Math.floor( dur % (60*60) / 60 ) )+" 分";
            sec.innerHTML=setZero(Math.floor(dur%60 ) )+" 秒";
        }else{
            clearInterval(timeId);
        }
      }
    function setZero(num){
        var n = parseInt(num, 10);
          if(n > 0){
            if(n <= 9){
              n = "0" + n;
            }
            return String(n);
          }else{
            return "00";
          }
    }
   

})(window);