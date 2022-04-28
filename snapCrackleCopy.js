let string = ""

function snapCrackle(maxValue){
    
    for(i = 1; i <= maxValue; i++){
    i % 2 != 0 && i % 5 == 0 ? string += "SnapCrackle, "  :
    i % 2 != 0 ? string += "Snap, " :
    i % 5 == 0 ? string += "Crackle, " :
    string += (i) + ", "





    } //End for.
    console.log(string)
} //End function.


