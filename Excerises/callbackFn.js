// recreate the Q1 of MAP excerise with using callbackFunction without using the map function 

// Create a function filterArray(arr, callback) that:
// Takes an array and a condition checkEven() callback
// Returns a new array of elements that pass the condition

function checkEven(num){
    return !(num%2===0) ? true : false
}
const nums  = [1,2,3,4,5,6,7,8,9];

function filterArray(arr, callbackFn) {
    const result = [];
    for(const item of arr){
        if(callbackFn(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filterArray(nums, checkEven));


