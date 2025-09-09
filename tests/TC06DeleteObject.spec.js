const {test,expect}=require('@playwright/test')
const  {request}= require('http')



test('Delete Object', async({request})=>{

const DeleteObject=await request.delete('objects/ff8081819782e69e0199293070dd7abe',{
    
    
})


console.log(await DeleteObject.json())
console.log(await DeleteObject.text())
console.log(await DeleteObject.status())
console.log(await DeleteObject.headers())


//Validations

expect(DeleteObject.ok()).toBeTruthy()
expect(DeleteObject.status()).toBe(200)


}

)