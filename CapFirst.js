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
print("FREECODECAMP IS NOT ENOUGH NEED TO LEARN RUBY ON RAILS MAKE MORE APPS WHATEVER IT TAKE")
