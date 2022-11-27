function formSubmit(){
    let x =document.getElementById("patientName").value;
    let text;
    if(patientName.value===""||patientName.value==null){
        text = "*Please Enter your Name*";   
    }else{
        text = "";
    }
    document.getElementById("name").innerHTML=text;
    document.getElementById("name").style.color="red";
}