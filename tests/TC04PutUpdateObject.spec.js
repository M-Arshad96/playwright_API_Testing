const {test,expect}=require('@playwright/test')
const  {request}= require('http')



test('Post Add An Object', async({request})=>{

const PutAddObject=await request.put('objects/ff8081819782e69e01990edf23d22bc4',{
    
    data:{
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 2049.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      "color": "gold"
   }

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