let input = Number(prompt("hay nhap mot so nguyen bat ki"));
 function isEven(a) {
    if(a%2===0){
        console.log(`so ${input} la so chan`);
        alert(`so ${input} la so chan`);
    }
    else {
        console.log(`so ${input} la so le`);
        alert(`so ${input} la so le`);
    }
 }
 isEven(input);