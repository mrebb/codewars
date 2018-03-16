function abbrevName(name){
    //Split the string into two words with space
    var nameSplit = name.split(" ");
    //convert to uppercase of first char's of two strings and concat with a dot in between
    return nameSplit[0].charAt(0).toUpperCase() + '.'+ nameSplit[1].charAt(0).toUpperCase();

}