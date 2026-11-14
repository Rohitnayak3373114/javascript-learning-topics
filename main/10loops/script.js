let input=prompt("Enter a number btw 1 to 3");
let number=5;
if (input==1){
 


for(i=1;i<=10;i++){
    console.log(number+"x"+i+"="+(number*i));
}}

else if(input==2){
   let i=1;
    while(i<=10){
        console.log(number+"x"+i+"="+(number*i));
        i++;
    }
}

else if(input==3){
    let i=1;
    do{
        console.log(number+"x"+i+"="+(number*i));
        i++;
    } while(i<=10);

}


else{
    console.log("invalid input");
}