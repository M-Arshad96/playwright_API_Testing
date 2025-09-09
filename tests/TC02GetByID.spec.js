const {test, expect}=require('@playwright/test')
const {request}=require('http')


test('TC Get objects by ID ' ,async({request})=>{
    
const TC02GetObjectByID =  await request.get('objects',{
    params:
    {
        "id":"ff8081819782e69e01990f04be8c2c7c"
    }
})




console.log( await TC02GetObjectByID.json())
console.log(await TC02GetObjectByID.status())
console.log(await TC02GetObjectByID.statusText())
console.log(await TC02GetObjectByID.headers())
console.log(await TC02GetObjectByID.url())


//validation 

expect(TC02GetObjectByID.status()).toBeGreaterThanOrEqual(200)
expect(TC02GetObjectByID.ok()).toBeTruthy()

})