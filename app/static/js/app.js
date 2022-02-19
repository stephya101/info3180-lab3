/* Add your Application JavaScript */
window.addEventListener('load', (event)=>{
    setInterval( ()=>{
        let flaskR= document.querySelector("li#flashRem");
        if (document.contains(flaskR)){
            flaskR.innerHTML="";
        }
    }, 3000)
});