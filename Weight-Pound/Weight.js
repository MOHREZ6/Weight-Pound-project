const inputEl=document.getElementById("input");
const resultEl = document.getElementById("result");
const error=document.getElementById('error');


let errorTime;

function result(){
     
    if(inputEl.value<= 0 || isNaN(inputEl.value)) {
            error.innerHTML='please enter number value:)';
            inputEl.style.background='#ED213A';
            

            let errorTime=setTimeout(() => {
                error.innerHTML= "";
                inputEl.value="";
                inputEl.style.background='';
                
            } , 2500);

    
    }else{
         resultEl.innerText =Number((inputEl.value /2.2).toFixed(2));
        
             
        }
}

   
inputEl.addEventListener("input", result);