function checknum(num){
for(let x=2; x<=Math.sqrt(num); x++){
 if(num%x==0){
return false;
}
}
return true;
}

if(checknum(num)){
console.log("Its is prime"
}else{
console.log("Its is not prime")
}