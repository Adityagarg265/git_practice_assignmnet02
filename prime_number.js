function checknum(num){
for(let x=2; x<=num; x--){
 if(num%x==0){
bag++
}
}
if(bag==1){
return true;
}else{
return false;
}
}