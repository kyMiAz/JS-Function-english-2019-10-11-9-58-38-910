function alphabetSort(message){
    var arr = message.split("");
    return arr.sort((a, b) => {return a.charCodeAt() - b.charCodeAt();}).join("");
  }
console.log(alphabetSort('hello')); // should return 'ehllo'