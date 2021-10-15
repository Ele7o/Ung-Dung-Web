$(document).ready(function(){
    $("#dk").click(function(){
        getInfo();
    });
})
function getInfo(){
    var txtUserName = document.getElementById("txtUserName").value;
    var txtPassword = document.getElementById("txtPassword").value;
    var date = new Date($("#txtBirthday").val());
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var txtBirthday = day + "/" + month + "/" + year;
    var txtSexValue = document.getElementsByName('sex');
    var txtSex;
    for(i = 0; i <radioValue.length; i++){
        if(radioValue[i].checked){
            txtSex = radioValue[i].value;
        }
    }
    var selected = document.getElementById("selected").value;
    // alert("Username: " + txtUserName + "\nPassword: " + txtPassword + "\nBirthday: " + txtBirthday + "\nSex: " + txtSex + "\nSelected: " + selected);
    

}