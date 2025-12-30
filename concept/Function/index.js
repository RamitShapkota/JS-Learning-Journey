// console.log("hey ramit you are nice!")
// console.log("hey ramit you are  very nice!")
// console.log("hey ramit your tshirt nice!")
// console.log("hey ramit your gf is nice!")

function nice(name)
{
    console.log("hay " + name + " you are nice!")
    console.log("hay " + name + " you are loyal!")
    console.log("hay " + name + " you are handsome!")
    console.log("hay " + name + " you are cool!")
}
nice("ramit")

// function sum(a,b){
//     console.log(a+b)
// }
// sum(5,6)

function sum(a,b,c=3){
    // console.log(a+b)
    return a+b+c;
}
result1=sum(5,6)
result2=sum(5,62)
result3=sum(5,60,1)

console.log("the sum of this number is:"+result1)
console.log("the sum of this number is:"+result2)
console.log("the sum of this number is:"+result3)

// Arrow function
// async (params) => {
    
// }

const func1=(x)=>{
    console.log(" i am arrow function",x)
}
func1(34);
func1(3);
func1(4);
func1(3.4);
func1(35);

