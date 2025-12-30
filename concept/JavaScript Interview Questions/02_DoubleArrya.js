// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleArray(array){
    const result=[...array];
    for(let i=0;i<result.length-1;i++)
    {
        if(result[i]===result[i+1])
        {
            result[i]*=2;
            i++;
        }
        else{
            result[i]*=2;
        }
    }
    return result;
}

console.log(doubleArray([1,2,3,4,5,5,6]));
