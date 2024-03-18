document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("degreeinp").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        alert(temp + "°C");
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("degreeinp").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        alert(temp + "°F");
    }
    else{
        document.getElementById("theAnswer").innerHTML = "Select a unit please)"
    }

}


function toCelcius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return (temp * 9/5) + 32;
}