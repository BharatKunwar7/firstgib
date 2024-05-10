/*let user={
    name:"Bharat Kunwar",
    age:22,
    address:"kathmandu",
    phone:"9860779414"

}
//let {name,age,address,phone}=user // destructure method
//console.log(name,age,address,phone);

let {name:n, age:a, address:aa, phone:p} = user//yasari pani garna sakinxa aliceing vanxa
console.log(n , a,aa,p)
*/


//...rest operator
/*let student={
name:"Roshan Kunwar",
rollno:34,
address:"sano thimi",
mobile:"9860779414"
}
 let {name,...rest}=student //keyword rw value dui otai dinxa rest le
 console.log(name,rest)
 */
//spread operator

let obj={
    fullname:"kamal sharma",
    age:22,
    address:"dhangadhi",
    mobile:"9860779414",
    id:234455,
    card:"133444"
}
let bioData={...obj}
console.log( bioData);
//function baat
let names=["aman","anuj","vivek","bharat"]
function getnames(name1,name2,name3){
    console.log(name1,name2,name3)


}
getnames(...names)



































