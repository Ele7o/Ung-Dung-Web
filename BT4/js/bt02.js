$(document).ready(function(){
    var name = prompt("Tên: ");
    if(name!=null){
        var date = prompt("Năm sinh:");
        if(date!=null){
            var today = new Date();
            var year = today.getFullYear();
            var age = year - date;
            document.getElementById("hname").innerHTML = "Chào bạn: "+" <b>"+name+"</b>";
            document.getElementById("hage").innerHTML = "Tuổi của bạn là : "+" <b>"+age+"</b>";
        }
    }


});