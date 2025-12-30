function vowelcount(str){
    const str1=str.toLowerCase();
    let vowel="aeiou"
    let count=0;
    for(let i=0;i<str1.length;i++)
    {
        for(let j=0;j<vowel.length;j++){
            if(str1[i]==vowel[j])
            {
                count++;
            }
        }
    }
    return count;
}
console.log(vowelcount("HII I AM RAMIT AND WHTA ABAOUT YOY"));
