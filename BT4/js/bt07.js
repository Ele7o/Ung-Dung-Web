
function getInfo(){

    var account  = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    var sexRadio = document.getElementsByName("sex");
    var date = document.getElementById("date").value;
    
    var interest = document.getElementById("interest").value;
    var sex = 0;
    
    for(var i=0;i<sexRadio.length;i++){
        if(sexRadio[i].checked){
            sex = sexRadio[i].value;
        }
    }
  
    document.getElementById("output").innerHTML = "Chào mừng " +account +"\n"
                                                + "Bạn là "+  sex +"\n"
                                                + "Mật khẩu của bạn có "+ password.length + " ký tự\n"
                                                + "Bạn sinh ngày : " + date +"\n"
                                                + "Vấn đề bạn quan tâm là " + interest;
    
}