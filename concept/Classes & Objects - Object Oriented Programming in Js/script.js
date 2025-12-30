// let obj={
//     a:1,
//     b:"Ramit"
// }
// console.log(obj);


// let animal={
//     eats:true
// };

// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal; //sets rabbit.[[prototype]]=animal

class Animal{
    constructor(name){
        this.name=name;
        console.log('object is created',name);
    }

    eats()
    {
        console.log('I am eating');
        
    }
    jumps()
    {
        console.log('I am jumping');
        
    }
}

class lion extends Animal{
     constructor(name){
        super(name)
        console.log('object is created and i am lion');
        
     }
     //method overriding
     eats(){
        //super keyword also use to call the metod of parent class
        super.eats()
        console.log('i am eating meat');
        
     }
}

let a=new Animal("Animal")
console.log(a);

let l=new lion("Lion");
console.log(l);


//to identify object of class we use instanceof
console.log(l instanceof lion);//l is object of lion so it return true
console.log(l instanceof Animal);//i t also reuten true
console.log(a instanceof lion);//returns false bcz a is not become from lion


