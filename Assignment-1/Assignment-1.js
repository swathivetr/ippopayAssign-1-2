function isValidPassword(password){
   if(!(password.length >= 8 && password.length <= 20)){
       return false;
   }
   let count =0;
   for(let i=0; i<=9;i++){
       if(password (i)== -1){
           count =1;
       }
   }
   if(count === 0){
      return false;
   }
   count=0;
   for(let i=65;i<=90;i++){
       if(password.indexOf(String.fromCharCode(i))!==-1){
           count=1;
       }
   }
   if(count === 0){
       return false;
   }
 
   count = 0;
   for(let i=97;i<=122;i++){
       if(password.indexOf(String.fromCharCode(i))!== -1){
         count = 1;
       }
 }
 if(count===0){
   return false;
 }
 return true;
}
