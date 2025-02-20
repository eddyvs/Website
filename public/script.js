var bits = 0;
function hitCounter(){
    bits=bits+1;
    document.getElementById("bitsValue").innerHTML=bits;
}
function toggleShop(){
    if (document.getElementById("shop").style.display=="none"){
        document.getElementById("shop").style.display="block";}

    else if (document.getElementById("shop").style.display=="block") 
        {document.getElementById("shop").style.display="none";}
}
function toggleStats() {      
    if (document.getElementById("stats").style.display=="none"){
        document.getElementById("stats").style.display="block";}
   
    else if (document.getElementById("stats").style.display=="block")  
        {document.getElementById("stats").style.display="none";}
}