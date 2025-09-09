const {test,expect}=require('@playwright/test')
const  {request}= require('http')



test('Patch Add An Object partial ', async({request})=>{

const PutAddObject=await request.patch('objects/ff8081819782e69e01990f04be8c2c7c',{
    
    data:{
   "name": "Apple MacBook Pro 18",
   

    }
})


console.log(await PutAddObject.json())
console.log(await PutAddObject.text())
console.log(await PutAddObject.status())
console.log(await PutAddObject.headers())


//Validations

expect(PutAddObject.ok()).toBeTruthy()
expect(PutAddObject.status()).toBe(200)


}

)