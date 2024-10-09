function konversi(){
    let nilai = parseFloat(document.getElementById("cNilai").value);
    let hasil = "";
    let conve = document.getElementById("cHitungan").value;
    //var decimal=  /^[-+]?[0-9]+\.[0-9]+$/;

    if(nilai==""){
        alert("Input Harus Terisi dan Angka!");
    }else{
        if(conve == "C2F"){
            let hasil = ((9/5) * nilai) + 32;
            document.getElementById("cHasil").value = parseFloat(hasil);
            document.getElementById("cFormula").innerHTML = '('+nilai+'&deg;C &times; (9/5)) + 32 = '+hasil+'&deg;F';
        }else{
            let hasil = (5/9) * (nilai - 32);
            document.getElementById("cHasil").value = parseFloat(hasil);
            document.getElementById("cFormula").innerHTML = '(5/9) &times; ('+nilai+'&deg;C - 32) = '+hasil+'&deg;F';
        }
        
    }
    document.getElementById("cNilai").focus();
}

function reset(){
    document.getElementById("cNilai").value = "";
    document.getElementById("cHasil").value = "";
    document.getElementById("cFormula").innerHTML = "";
    document.getElementById("cHitungan").value = "C2F";
    document.getElementById("nNilai").innerHTML = "Celcius (&deg;C): *";
    document.getElementById("nHasil").innerHTML = "Fahrenheit (&deg;F):";
    document.getElementById("link").innerText = "Fahrenheit ke Celcius";
    document.getElementById("lF2C").style.display = "none";
    document.getElementById("lC2F").style.display = "block";
    document.getElementById("cNilai").focus();
}

function reverse(){
    let hitungan = document.getElementById("cHitungan").value;
    let nNilai = document.getElementById("nNilai");
    let nHasil = document.getElementById("nHasil");

    if(hitungan == "C2F"){
        document.getElementById("cNilai").value = "";
        document.getElementById("cHasil").value = "";
        document.getElementById("cFormula").innerHTML = "";
        document.getElementById("cHitungan").value = "F2C";
        nNilai.innerHTML = "Fahrenheit (&deg;F): *";
        nHasil.innerHTML = "Celcius (&deg;C):";
        document.getElementById("link").innerText = "Celcius ke Fahrenheit";
        document.getElementById("lF2C").style.display = "block";
        document.getElementById("lC2F").style.display = "none";
        document.getElementById("cNilai").focus();
    }else{
        document.getElementById("cNilai").value = "";
        document.getElementById("cHasil").value = "";
        document.getElementById("cFormula").innerHTML = "";
        document.getElementById("cHitungan").value = "C2F";
        nNilai.innerHTML = "Celcius (&deg;C): *";
        nHasil.innerHTML = "Fahrenheit (&deg;F):";
        document.getElementById("link").innerText = "Fahrenheit ke Celcius";
        document.getElementById("lF2C").style.display = "none";
        document.getElementById("lC2F").style.display = "block";
        document.getElementById("cNilai").focus();
    }
}