const {test,expect}=require('@playwright/test')
const  {request}= require('http')



test('Post Add An Object', async({request})=>{

const PostAddObject=await request.post('objects',{
    data:{

        
   "name": "Apple MacBook pro max 19",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      
   }

    }
})


console.log(await PostAddObject.json())
console.log(await PostAddObject.text())
console.log(await PostAddObject.status())
console.log(await PostAddObject.headers())


//Validations

expect(PostAddObject.ok()).toBeTruthy()
expect(PostAddObject.status()).toBe(200)


}

)