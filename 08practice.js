//splice and slice
//add garne garera aaune result
/*const num1=[101,3,5,6,7,77,55,88]
num1.splice(2,3,111,122,44,56)
console.log(num1)
//result=101,3,111,122,44,56,55,88 yo value delete vayo=5,6,7

//kun kun delete vayo vanera herne method
const num2=[101,3,5,6,7,77,55,88]
const myNum =num2.splice(2,3)
console.log(myNum)
//yo value ho delete vayako=5,6,7
//delete vayako value herne tarika

//slice ma new array banaunu parax*/
//const arr=[1,2,3,4,5,6,7,8,9]
//const myArr=arr.slice(3)  //result: index 3 dekhi paxi sabai element dinxa

//console.log(myArr)
//yo ho result:4,5,6,7,8,9
//const myArr=arr.slice(3,6) //index 3 dekhi 5 samma value dinxa index 6 dinna
//console.log(myArr)
//result 4,5,6 index 3 dekhi 5 samma matra diyo


//push and pop
/*const arr=[1,2,3,4,5,6,7,8,9]
//console.log(arr)

const myArr=arr.join("-")
console.log(myArr)
console.log(typeof myArr)
*/

//string concatenation
//dui tarika le garinxa best spread hoo
//  .concat()

const marvel_heros=["spiderman","thor","ironman"]
const dc_heros=["superman","batman","loki"]
const allheros=marvel_heros.concat(dc_heros)
console.log(allheros)


// spread ()method
const marvel_heros1=["spiderman","thor","ironman"]
const dc_heros1=["superman","batman","loki"]
const allheros2=[...marvel_heros1,...dc_heros1]
console.log(allheros2)

// array vitra array xa vane sabalai 1 array banauxa

const array=[1,2,3,[4,6],7,8,[5,7,[8,9]]]
const realArray=array.flat(Infinity)
console.log(realArray)





































