$(document).ready(function() {
    $("button").click(function(){
        getName();
        tinhtuoi();
    })
})
function tinhtuoi(){
    var today = new Date();
    var year = today.getFullYear();
    var date = document.getElementById("date").value;
    if(date!=""){
        if(date<=year&&date>=1900){
            var age = year - date;
            document.getElementById("hold").innerHTML = "Tuoi cua ban la " + age;
        }
    }
}
function getName(){
    var name = document.getElementById("name").value;
    if(name!=""){
        document.getElementById("hname").innerHTML = "Xin chao "+name+" !\n";
    }
}