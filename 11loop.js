//if statement
const name=""
if(name!==""){
    console.log("your name is:",name)
}
else{
    console.log("name is empty")
}
//create a javascript code block percentage and division based on percentage 
//you have a variable starting marks obtained
//the value should be  les than 500 and greater than eqaul to 0
//calculate the percentage if total scoere is 500
//calculate the division based on the percentage
//for the divsion consider
//percentage<=80 =>first division disctinction
//percentage>=60 < 80first division
//

const totalValue=500
const marks=40
const per=(marks/totalValue)*100
if(per>=80){
    console.log("distinction")
}

//calculate utility bills of electricity 
//assume a household consumes 350 units of electricty in a month
//calculate the total bill to be paid
//consider the following the rate is 
//total units consumes is less than  has to be paid 20 a lumsum amount of npr 80
/*for next 20 units npr 5/units
for next 30 units npr7.5/units
for next 5o units npr 10/units
for next 100 unit nper 15/units
and all above rate is npr 20/units
*/
const unitsconsumed=350
let tobepaid=0
if(unitsconsumed <=20)
{
    tobepaid=80
}else if(unitsconsumed<=40){
    tobepaid=80+(unitsconsumed-20)*5
}else if(unitsconsumed<=70){
    tobepaid=80+20*5+(unitsconsumed-(20+20))*7.5

}
    //half self work

//calculate tax to paid monthly and yearly with net income
//consider a software developer earns yearly npr 5000000
//the tax a bracket for is follow
//for the first npr is 5000000, 1%
//for next npr is 200000,===>15%
//                300000,===>20
//                1000000===>25%
//                2000000===>30%
//and for any  amount surplus =>36%
//solution









































































































