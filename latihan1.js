var string = ''
var tinggi = 4
var a = 0
var b = 1

for (var x = 1 ; x <= tinggi ; x++){
    for (var k = tinggi ; k > x ; k--){
        string += ' '
    }
    for (var i = 0 ; i < x ; i++){
        string += (b)
        var c = a + b
        a = b
        b = c
        if (i != x-1){
            string += ' '
        }
        
    }
    string += '\n'
}

console.log(string)


