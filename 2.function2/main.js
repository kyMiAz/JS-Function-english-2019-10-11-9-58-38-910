function palindrome(message){
    var length = message.length - 1;
    for(var i = 0; i < length /2; i++) {
        if(message[i] !== message[length - i]) {
            return false;
        }
    }
    return true;
  }
console.log(palindrome('hello')) // should return false
console.log(palindrome('abcba')) // should return true