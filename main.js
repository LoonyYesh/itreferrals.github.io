function filter(){
    var exp = parseInt(document.getElementById("exp").value);
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
    var trs = document.querySelectorAll('tr[class="vals"]');
    for (var tr of trs){
        tr.style.visibility='hidden';
    }
    for (var checkbox of markedCheckbox) {  
        for(let tr of trs){
            let temp_exp = parseInt(tr.id.split(",")[2]);
            console.log(isNaN(exp))
            if(temp_exp<=exp || isNaN(exp)){
                if(tr.id.includes(checkbox.value)){
                    tr.style.visibility='visible';
                    document.body.append(checkbox.value + ' ');  
                }
            }
        }
    }  
}
