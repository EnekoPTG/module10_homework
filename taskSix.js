//если суть была об одинаковом ТИПЕ элементов:
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("true");
} else {
    console.log("false");
}
//если суть была об одинаковых ЗНАЧЕНИЯХ элементов:
let arr = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if ((arr[i]) !== (arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("true");
} else {
    console.log("false");
}