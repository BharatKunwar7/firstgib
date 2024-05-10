let product=[]
let product_1={
    name:"galaxy",
    price:"250000",
    brand:"samsung"
}
let product_2={
    name:"iphone",
    price:"200000",
    brand:"apple"
}
let product_3={
    name:"redmi",
    price:"30000",
    brand:"xiomi"
}
let product_4={
    name:"v30",
    price:"230000",
    brand:"vivo"
}
let product_5={
    name:"a14",
    price:"20000",
    brand:"oppo"
}
product.push(product_1,product_2,product_3, product_4, product_5)


product.unshift(1,1,{
    name:'mo5',
    price:'30000',
    brand:'motorola'})
console.log(product)
