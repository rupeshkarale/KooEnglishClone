document.querySelectorAll("#follow-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
        if(btn.innerHTML == "+ Follow"){ 
            btn.innerHTML = "Following";
            btn.style.backgroundColor = "#FFFFFF";
            btn.style.color = "#759295";
        }
        else{
            btn.innerHTML = "+ Follow";
            btn.style.backgroundColor = "#759295";
            btn.style.color = "#FFFFFF";

        }
    });
});

