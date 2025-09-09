const {test, expect}=require('@playwright/test')
const {request}=require('http')


test('TC Get List of objects ' ,async({request})=>{
const TC01ListofAllObjects =  await request.get('objects')


console.log( await TC01ListofAllObjects.json())
console.log(await TC01ListofAllObjects.status())
console.log(await TC01ListofAllObjects.statusText())



//validation 

expect(TC01ListofAllObjects.status()).toBeGreaterThanOrEqual(200)

})








