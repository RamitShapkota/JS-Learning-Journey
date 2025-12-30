function sumArray(arrya){
    let sum=0;
    for(let i=0;i<arrya.length;i++){
        if(arrya[i]<0){
            break;
        }
       sum+=arrya[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4,5,-6,-7]));
