function titleCase(str) {
  newStr = '';
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i in str){
    newStr += str[i][0].toUpperCase() + str[i].slice(1, str[i].length ) + " ";
  
  
}
return newStr;
}

titleCase("I'm a little tea pot");