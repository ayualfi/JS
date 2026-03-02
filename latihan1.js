var string = ''
for(var i = 10; i > 0 ; i--){
    for(var k = 0; k<10-i ; k++){
        string = string + ' '
    }
    for(var j = 0; j < i ; j++){
        string = string + '#'
    } 
    string = string + '\n'
}
console.log(string)