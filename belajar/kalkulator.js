function kalkulator(angka1, angka2, operator){
    if (operator == '*'){
        return angka1*angka2
    }else if(operator == '+'){
        return angka1+angka2
    }else if(operator == '-'){
        return angka1 - angka2
    }else{
        return angka1/angka2
    }
}

var hasilOperasi = function(angka1, angka2, operator, hasil){
    console.log('Hasil operasi ' + angka1 + operator + angka2 + ' = ' + hasil)
}

var angka1 = parseInt(prompt('Masukkan angka 1 = '))
var angka2 = parseInt(prompt('Masukkan angka 2 = '))
var operator = prompt('Masukkan operator(* + - /)= ')

var hasil = kalkulator(angka1, angka2, operator)

hasilOperasi(angka1, angka2, operator, hasil)