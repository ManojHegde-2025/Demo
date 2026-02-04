//switch condition

// const a = 90;

// switch(a){

//     case (90):
//         console.log("A+");
//         break;
//     case 80:
//         console.log("A");
//         break;
//     case 70:
//         console.log("B+");
//         break;
//     case 60:
//     case 50:
//     console.log("B");
//     break;
//     default:
//         console.log("need to improve!!!");
//         break;
// }

const a = 'A'; 

switch(a){

    case 'A+' :
        console.log("---Outstanding!!!---");
        break;
    case 'A':
        console.log("---Excellent!!!---");
        break;
    case 'B+':
        console.log("---Very Good!!!---");
        break;
    case 'B':
    case 'C+':
        console.log("---need to improve!!!---");
        break;
    default:
        console.log("---FAIL!!!!---");
        break;
}