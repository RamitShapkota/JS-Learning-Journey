function mirror(str){
   let rev="";
   for(let i=str.length-1;i>=0;i--)
   {
     rev+=str[i];
   }
   const result=str+rev;
   console.log(result);
   
}
mirror("ramit")
