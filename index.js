const PigLatin = function(str){

    let splited = str.split("",1)
    let newString = str.substr(1,str.length)

    switch(splited){
        case "a": return newString += "way";
        case "e": return newString += "way";
        case "i": return newString += "way";
        case "o": return newString += "way";
        case "u": return newString += "way";
        default: return newString += splited + "ay";
    }

    return newString
}

module.exports = PigLatin
