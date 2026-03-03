var string = ''
var tinggi = 7

for ( var i = 1 ; i <= tinggi ; i++){
//spasi
    for (var k = tinggi ; k > i ; k--){
        string += " "
    }
// pagar
    for (var j = 1 ; j <= (2 * i - 1 ); j++){
    string += "#"
}
    string += '\n'
}
console.log (string)
