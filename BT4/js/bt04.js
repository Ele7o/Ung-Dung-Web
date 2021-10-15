$(document).ready(function(){
    $("#ans").click(function(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c;
    var kq;
    var radioValue = document.getElementsByName('pheptoan');
    for(i = 0; i <radioValue.length; i++){
        if(radioValue[i].checked){
            c = radioValue[i].value;
        }
    }
    switch(c){
        case "cong":
            kq = parseInt(a) + parseInt(b);
            $("#kq").val(kq) ;
            break;
        case "tru":
            kq = parseInt(a) - parseInt(b);
            $("#kq").val(kq) ;
            break;
        case "nhan":
            kq = parseInt(a) * parseInt(b);
            $("#kq").val(kq) ;
            break;
        case "chia":
            if(b != 0){
                kq = parseInt(a) / parseInt(b);
                $("#kq").val(kq) ;
            }
            break;
    }
    })
})
function Math(){
    

   
}
