var n=localStorage.getItem("cnt");
if(n==null)
    n=0;
n++;
localStorage.setItem("cnt", n);
document.getElementById("numvis").innerHTML=(n/2);