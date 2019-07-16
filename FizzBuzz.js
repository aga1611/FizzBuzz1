function reverse(sentence){
    if(sentence.lenght > 4){
        let sliced = sentence.match(/.{1,4}/g);
        let reversed = sliced.reverse()
        reversed.join()
        console.log(reversed)
    }
}

for (x = 1; x <= 500; x++){
    name = ""
    if( x % 3 == 0 ){
        name += "Fizz"
    }
    if( x % 5 == 0 ){
        name += "Buzz"
    }
    if( x % 7 == 0 ){
        name += "Bang"
    }
    if( x % 11 == 0 ){
        if ( x % 13 == 0 ){
            name += "Bong"
        }    
        else{
            console.log("Bong")
        }
    }
    if( x % 13 == 0 ){
        if( name.charAt(0) == "B"){
            name = "Fezz" + name
        }
        else{
            name += "Fezz"
        }
    }
    if( x % 17 == 0 ){
        reverse(name)
    }
    if(( x % 7 == 0 ) ||  ( x % 3 == 0 ) || ( x % 5 == 0 ) || ( x % 13 == 0 )){
        console.log(name)
    }
    else{
        console.log(x)
    }
}