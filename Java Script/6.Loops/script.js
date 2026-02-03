// For Loop
let i =0;
let n= 5;

// for (i=2;i<7;i++)
// {
//     console.log("Manoj",i); 
// }

// i++ --- increments by 1
// i+n --- increments by n n= any number

// for (i=2;i<7;i+=4)
// {
//     console.log("Manoj",i); 
// }

// decrement

// for (i=8;i>0;i-=2)
// {
//     console.log("Manoj",i); 
// }

// ---While Loop---

// let count = 0;
// while (count<5){
//     console.log(count);
//     count++;
// }

// ---Do while Loop---

// let count2 = 1
// do {
//     console.log(count2);
//     count2++;
// } while(count2<3);

//---Difference btw while and do while---

// console.log("while loop");
// let count1 = 10;
// while (count1<5){ 
//     console.log(count1);
//     count1++;
// }

// console.log("do while loop");
// let count2 = 10;
// do {
//     console.log(count2);
//     count2++;
// } while(count2<3);

// continue

while (i<10){
    i++;
    if (i===5) continue;
    console.log(i);
}

// break

let j = 0;
while (j<10){
    j++;
    if (j===5) break;
    console.log(j);
}