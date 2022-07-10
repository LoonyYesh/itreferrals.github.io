function filter(){
    var exp = parseInt(document.getElementById("exp").value);
    var selectedSkills = document.querySelectorAll('input[name="skills"][type="checkbox"]:checked');  
    var selectedCatagory = document.querySelectorAll('select[name="catagory"]')[0].options;  
    var trs = document.querySelectorAll('tr[class="vals"]');
    for (var tr of trs){
        if (selectedSkills.length == 0){
            tr.style.visibility='visible';
        }
        else{
            tr.style.visibility='hidden';
        }
    }
    selectedCatagory = selectedCatagory[selectedCatagory.selectedIndex].text;
    for (var skill of selectedSkills) {  
        for(let tr of trs){            
            let temp_array = tr.id.split(",");
            let temp_sno = temp_array[0];
            let temp_catagory = temp_array[1];
            let temp_minExp = parseInt(temp_array[2]);
            let temp_maxExp = parseInt(temp_array[3]);
            let temp_exp = parseInt(tr.id.split(",")[1]);
            console.log(exp>=temp_exp)
            if((selectedCatagory == temp_catagory || selectedCatagory == "others") && (exp>=temp_exp || isNaN(exp))){
                if(tr.id.includes(skill.value) ){
                    tr.style.visibility='visible';
                    document.body.append(skill.value + ' ');  
                }
            }
        }
    }  
}
