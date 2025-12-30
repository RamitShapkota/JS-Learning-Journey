class user{
    constructor(name){
        //invoke the setter
        this.name=name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length<4){
            console.log('Name is to short.');
            return;
        }
        this._name=value;
    }
}

let user1=new user("john");
console.log(user1.name);

user1.name="Ramit"
console.log(user1.name);

