
function checknum(num){

let bag = 0
for(let x=1; x<=num; x++){
 if(num%x==0){
bag++
}
}
if(bag==2){
return true;
}else{
return false;
}
}
let ans = checknum(13);
if(ans==true){
   console.log("Prime number")
}
else {
console.log("Not a prime")
}