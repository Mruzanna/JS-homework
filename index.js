string_to_array = function (str) {
return str.split(" ");
};
console.log(string_to_array("Hello World"));




const palindrome = str => {
str = str.toLowerCase();
let len = str.length;
 for (let i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]){
 return false; }
   }
     return true;}
console.log(palindrome("Level"));







  

