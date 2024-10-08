//Proses Hitung
function konversi(){
    //variable
    let nInput  = document.getElementById("cNilai").value;
    let nilai   = parseFloat(nInput);
    let hasil   = "";
    let conve   = document.getElementById("cHitungan").value;

    //Validasi Harus Terisi
    if(nInput==""){
        alert("Harus Terisi dan Angka!");
    }else{
        if(conve == "C2F"){
            //hitung celcius ke fahrenheit
            let hasil = parseFloat(((9/5) * nilai) + 32).toFixed(2);
            document.getElementById("cHasil").value = parseFloat(hasil).toFixed(2);
            document.getElementById("cFormula").innerHTML = '('+nilai+'&deg;C &times; (9/5)) + 32 = '+hasil+'&deg;F';
        }else{
            //hitung fahrenheit ke celcius
            let hasil = parseFloat((5/9) * (nilai - 32)).toFixed(2);
            document.getElementById("cHasil").value = parseFloat(hasil).toFixed(2);
            document.getElementById("cFormula").innerHTML = '(5/9) &times; ('+nilai+'&deg;C - 32) = '+hasil+'&deg;F';
        }
        
    }
    document.getElementById("cNilai").focus();
}

//Reset Button
function reset(){
    document.getElementById("cNilai").value = "";
    document.getElementById("cHasil").value = "";
    document.getElementById("cFormula").innerHTML = "";
    document.getElementById("cNilai").focus();
}

//Proses Tukar Perhitungan
function reverse(){
    let hitungan = document.getElementById("cHitungan").value;
    let nNilai = document.getElementById("nNilai");
    let nHasil = document.getElementById("nHasil");

    if(hitungan == "C2F"){
        //call function reset
        reset();

        //Rubah Informasi untuk Hitung Fahrenheit
        document.getElementById("cHitungan").value = "F2C";
        nNilai.innerHTML = "Fahrenheit (&deg;F): *";
        nHasil.innerHTML = "Celcius (&deg;C):";
        document.getElementById("link").innerText = "Celcius ke Fahrenheit";
        document.getElementById("lF2C").style.display = "block";
        document.getElementById("lC2F").style.display = "none";
    }else{
        //call function reset
        reset();

        //Rubah Informasi untuk Hitung Celcius
        document.getElementById("cHitungan").value = "C2F";
        nNilai.innerHTML = "Celcius (&deg;C): *";
        nHasil.innerHTML = "Fahrenheit (&deg;F):";
        document.getElementById("link").innerText = "Fahrenheit ke Celcius";
        document.getElementById("lF2C").style.display = "none";
        document.getElementById("lC2F").style.display = "block";
    }
}