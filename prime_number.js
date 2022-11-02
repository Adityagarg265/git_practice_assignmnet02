
function checknum(num){

for(let x=2; x<=Math.sqrt(num); x++){
   if(num%x==0){
return false;
}
}
return true;
}
}


let ans = checknum(13);
if(ans==true){
   console.log("Prime number")
}
else {
console.log("Not a prime")
}