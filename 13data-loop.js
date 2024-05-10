const product=[
    {name:"product One",price:100,discount:10},
    {name:"product Two",price:2000,discount:3},
    {name:"product Three",price:3400,discount:13},

]
//product name:product one
//product price npr:100
//product discount:10
//after discount npr:90
//other similar

/*let size=product.length//array properties
for(let i=0;i<size;i++){    //size=product.length jun lekhda ni hunxa
    console.log("product name",product[i].name)
    console.log("product price:npr",product[i].price)
    console.log("product discount",product[i].discount,"%")
    var after_discount=product[i].price-product[i].price*product[i].discount/100
    console.log("after discount:npr",after_discount)
    console.log("-------------------------")


}
*/


//for-in loop //index return garxa empty string reject
 /*for(let i in product){
    console.log("product name",product[i].name)
    console.log("product price:npr",product[i].price)
    console.log("product discount",product[i].discount,"%")
    var after_discount=product[i].price-product[i].price*product[i].discount/100
    console.log("after discount:npr",after_discount)
    console.log("-------------------------")
 }
 */

 //for-off value dinxa
 for(let elem of product){
    if(elem){
    console.log("product name",elem[i].name)
    console.log("product price:npr",elem[i].price)
    console.log("product discount",elem[i].discount,"%")
    var after_discount=elemt[i].price-elem[i].price*elem[i].discount/100
    console.log("after discount:npr",after_discount)
    console.log("-------------------------")
 }
}


 //create an array of student having name,email,marksObt as an object data
 //store at least 10 student data in that array
 //consider 500 as total score
 //print each students percentage and division
 //>=80===>distinction
 // >=60,<80==>first
 //>=45,<80===>
    //>=35,<45===>third
 //<35==>sorry!you are failed

let student=[
    {name:"adam",email:"adam@gmail.com",marksob:300},
    {name:"jhon",email:"jhon@gmail.com",marksob:400},
    {name:"loki",email:"loki@gmail.com",marksob:200},
    {name:"rn",email:"rn@gmail.com",marksob:250},
    {name:"kai",email:"kai@gmail.com",marksob:150},
    {name:"martin",email:"martin@gmail.com",marksob:450},
    {name:"bicky",email:"bicky@gmail.com",marksob:325},
    {name:"ubba",email:"ubba@gmail.com",marksob:200},
    {name:"short",email:"short@gmail.com",marksob:400},
]


for(let std of student){
    console.log("name of student",std.name)
    console.log("email id",std.email)
    console.log("mark",std.marksob)
    const per=std.marksob/5
    console.log("obtained percentage",per,"%")
    if(per>=80){
        console.log("division distinction")//similarly
    }else if(per>=60){
        console.log("division:first division")
    }else if()
    

}










































































