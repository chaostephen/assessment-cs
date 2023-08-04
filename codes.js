
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
//Depending on how many numbers are in the array but the append function would probably take about 5 μs per element and the Insert function would take 40 μs + 1 or 2 μs per element.

function hasUniqueChars(str){
    let arr=str.toLowerCase().split("");
    while(arr.length>0){
        let temp=arr.splice(0,1)
        if(arr.includes(temp[0])){
            return false;
        }
    }
    return true;
}

//Append would take 10+ μs and insert would take 80+ μs. It also depends on whether or not a non-unique character has been found. If so, it will exit the function prematurely and quicken the run time.


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

//Append would take 15+ μs and insert would take 60+ μs. It would have to loop through the whole alphabet anyway so these times are pretty accurate.

function findLongestWord(arr){
    let result = 0;
    for (let i =0; i<arr.length;i++){
        if(arr[i].length>result){
            result=arr[i].length;
        }
    }
    return result;
}

//Append would take 12+ μs and insert would take 40+ μs. It would have to loop through the whole alphabet anyway so these times are pretty accurate.

