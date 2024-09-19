const {test,expect} = require('@playwright/test')
const { log } = require('console')
const exp = require('constants')
const { request } = require('http')



test('API get',async ({request})=>{
    const response = await request.get('https://reqres.in/api/users/2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('API Post', async({request})=>{
    const response = await request.post('https://reqres.in/api/users', {data:{"name":"Arumugavel", "job":"SDET"}})
    console.log(await response.json())
    expect(response.status()).toBe(201)
})
test('API Update',async({request})=>{
    const response = await request.patch('https://reqres.in/api/users/416',{data:{"name":"Arumugavel K", "job":"SDET-1"}})
    console.log(await response.json());
    expect(response.status()).toBe(200)
})

test('API Delete',async({request})=>{
    const response = await request.delete('https://reqres.in/api/users/416')    
    expect(response.status()).toBe(204)
})

test('API User', async({request})=>{
    const response = await request.get('https://reqres.in/api/users/561')
    console.log(await response.json())

})

test('API Register', async({request})=>{
    const response = await request.post('https://reqres.in//api/register',{ data:{"email":"eve@hotmail.com", "password":"pistolshot"}})
    
})

test('API Login', async({request})=>{
    const response = await request.post('https://reqres.in//api/login',{"email":"eve@hotmail.com", "password":"pistolshot"})
})

test.only('API Store', async ({request})=>{
    const response = request.post('https://petstore.swagger.io/#/user/createWithList',[{"id":32, "username":"sunnyleo","firstName":"Sunny", "lastName":"Leone", "email":"sl@gmail.com", "password":"sunpass", "phone":"9238485902", "userStatus":1 }])
    expect((await response).status()).toBe(405)
})
test.only('Store',async ({request})=>{
    const response = await request.get('https://petstore.swagger.io/#/user/sunnyleo')
})
test.only('update',async ({request})=>{
    await request.put('https://petstore.swagger.io/#/user/sunnyleo',[{"lastName":"Leoo"}])
})