var string = ''
var tinggi = 4

for (var x = 0 ; x <= tinggi ; x++){
    var num = 1
    for (var j = tinggi ; j > x ; j--){
        string +=' '
    }
    for (var k = 0 ; k <= x ; k++){
        string += (num) += ' '
        num = num * (x-k)/(k+1)  
    }
    string += '\n'
}
console.log(string)


