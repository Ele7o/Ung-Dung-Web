$(document).ready(function(){
    
    var table = document.getElementById("bang");
    
    for(var  i = 1; i <11;i++){
        var row = table.insertRow(i-1);
        var m2 = row.insertCell(0);
        var m3 = row.insertCell(1);
        var m4 = row.insertCell(2);
        var m5 = row.insertCell(3);
        var m6 = row.insertCell(4);
        var m7 = row.insertCell(5);
        var m8 = row.insertCell(6);
        var m9 = row.insertCell(7);
        m2.innerHTML = "2 x "+i+" = "+2*i;
        m3.innerHTML = "3 x "+i+" = "+3*i;
        m4.innerHTML = "4 x "+i+" = "+4*i;
        m5.innerHTML = "5 x "+i+" = "+5*i;
        m6.innerHTML = "6 x "+i+" = "+6*i;
        m7.innerHTML = "7 x "+i+" = "+7*i;
        m8.innerHTML = "8 x "+i+" = "+8*i;
        m9.innerHTML = "9 x "+i+" = "+9*i;
        
    }
    
});

