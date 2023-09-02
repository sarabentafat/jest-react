// const sum=(number,number2,num)=>{
//     return (number|| 0) + (number2 || null)+(num|| null)
// }
//DOCUMENTATION 
/* 
sum function 
[1] return 0 if no number passed
[2]...
[3]

*/

const sum=(...numbers)=>{
    return numbers.reduce((previous,current)=>previous+current,0)

}
module.exports=sum