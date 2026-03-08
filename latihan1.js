var string = ''
var tinggi = 4

for (var x = 0 ; x <= tinggi ; x++){
    for (var k = 0 ; k <= x ; k++){
        if (k == 0 || k == x ){
            string += 1
        }else{
            string += 2
        }
    }
    string += '\n'
}
console.log(string)


