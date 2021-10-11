$(document).ready(function(){
    $("#ans").click(function(){
        giaiphuongtrinh();
    });
});
function giaiphuongtrinh(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var delta = b*b - 4*a*c;
    if(delta < 0){
        document.getElementById("kq").innerHTML="<b>Phương trình vô nghiệm</b>";
    }
    else if(delta == 0){
        var x = -b/(2*a);
        document.getElementById("kq").innerHTML="<b>Phương trình có nghiệm kép x = "+x+"</b>";
    }
    else{
        var x1 = (-b + Math.sqrt(delta))/(2*a);
        var x2 = (-b - Math.sqrt(delta))/(2*a);
        document.getElementById("kq").innerHTML="<b>Phương trình có 2 nghiệm phân biệt x<sub>1</sub> = " + x1 + " và x<sub>2</sub> = " + x2+"</b>";
    }
    
}
