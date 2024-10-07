function konversi(){
    let nilai = document.getElementById("celcius").value;
    let hasil = (parseInt(nilai) * 1.8) + parseInt(32);
    
    document.getElementById("fahrenheit").value = parseInt(hasil);
    document.getElementById("formula").innerHTML = '('+nilai+'&deg;C &times; (9/5)) + 32 = '+hasil+'&deg;F';
}