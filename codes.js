// Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.

// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
function addToZero(arr){
    let result = false;
    for (let i =0; i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===0){
                result=true;
            }
        }
    }
    return result;
}

// For example:

// console.log(addToZero([]));
// // // -> False

// console.log(addToZero([1]));
// // // -> False

// console.log(addToZero([1, 2, 3]));
// // // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True
// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str){
    let arr=str.toLowerCase().split("");
    while(arr.length>0){
        let temp=arr.splice(0,1)
        // console.log(arr)
        if(arr.includes(temp[0])){
            return false;
        }
    }
    return true;
    // console.log(arr)
}

// For example:

// console.log(hasUniqueChars("Monday"));
// // // -> True

// console.log(hasUniqueChars("Moonday"));
// // // -> False
// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.
function isPangram(str){
    let myStr=str.toLowerCase().split(" ").join("").split("");
    let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (let i =0;i<alpha.length;i++){
        if(!myStr.includes(alpha[i])){
            return false;
        }
    }
    return true;
}

// For example:

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True

// console.log(isPangram("I like cats, but not mice"));
// // -> False
// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr){
    let result = 0;
    for (let i =0; i<arr.length;i++){
        if(arr[i].length>result){
            result=arr[i].length;
        }
    }
    return result;
}

// For example:

// console.log(findLongestWord(["hi", "hello"]));
// // -> 5