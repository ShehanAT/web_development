// self-made Basic version 
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var dList = [];
  var counter = 0;
 for (var i = 0; i < Math.floor(arr.length/size); i ++){
 
   dList.push(arr.slice(counter , counter + size));
   counter += size;
  

   
 }
  if (counter !== arr.length){
    dList.push(arr.slice(counter, arr.length));
 }
  return dList;
} 


chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

// advanced version unknown author 
function chunkArrayInGroups(arr, size){
  var resp = [];
  var i = 0;
  while (i < arr.length){
    resp.push(arr.slice(i , i + size));
    i += size;
  }
  return resp;
}
chunkArrayInGroups(["a","b","c"], 2);
