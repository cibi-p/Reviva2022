function menuFunction(){
    console.log("hello");
    var x = document.getElementById("menu-clickk");
    if(x.style.display != "block")
    {
        x.style.display = "block";
    }
    else{
        x.style.display="none";
    }
}