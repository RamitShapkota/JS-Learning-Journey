/*Create a business name generator by combining list of adjectives and shop name and another word*

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Gramments

Another Word:
Bros
Limited
Hub
*/

function generator(a,b,c){
    let num=Math.floor(Math.random()*3)
    if(num==0)
        return a;
    else if(num==1)
        return b;
    else
    return c;
}

console.log(`The generated business name is: ${generator("Crazy","Amazing","Fire")} ${generator("Engine","Foods","Gramments")} ${generator("Bros","Limited","Hub")}`)
