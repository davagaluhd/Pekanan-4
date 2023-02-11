const chai = require ('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
require('dotenv').config()

chai.use(chaiHttp)

const api = chai.request(process.env.BASE_URL)

//Login
describe("Test User Login", function(){
    it("Success Login", function(done){
        api.post("/authentications")
        .set('Content-Type', 'Application/json')
        .send({
            email: 'davagaluh22@gmail.com',
            password: 'bebekkk22'
        })
        .end(function(error, response){
            expect(response.status).to.equals(201)
            global.token = response.body.data.accessToken;
            //console.log(response.body.data.accessToken)
            done();
        })
    })
})

//Add
describe("Test Add Unit", function(){
    it("Success Add Unit", function(done){
        api.post("/units")
        .set('Content-Type', 'Application/json')
        .set('Authorization', 'Bearer ' + global.token)
        .send({
            "name": "galuh",
            "description": "barang"
        })
        .end(function(error, response){
            expect(response.status).to.equals(201)
            global.unit = response.body.data.unitId;
            //console.log(response.body)
            //console.log(response.body.status)
            //console.log(response.body.data.unitId)
            //console.log(response.body.data.name)
            done();
        })
    })

    it("Unit name and description cannot be empty", function(done){
        api.post("/units")
        .set('Content-Type', 'Application/json')
        .set('Authorization', 'Bearer ' + global.token)
        .send({
            "name": "",
            "description": ""
        })
        .end(function(error, response){
            expect(response.status).to.equals(400)
            done();
        })
    })
})

//Get
describe("Test Get Unit", function(){
    it("Success Get Unit", function(done){
        api.get("/units/"+global.unit)
        .set('Content-Type', 'Application/json')
        .set('Authorization', 'Bearer ' + global.token)
        .end(function(error, response){
            expect(response.status).to.equals(200)
            expect(response.body.data.unit).to.have.a.property('name');
            expect(response.body.data.unit).to.have.a.property('description');
            //console.log(response.body)
            done();
        })
    })
    it("Failed Get Unit", function(done){
        api.get("/units/unit")
        .set('Content-Type', 'Application/json')
        .set('Authorization', 'Bearer ' + global.token)
        .end(function(error, response){
            expect(response.status).to.equals(404)
            //console.log(response.body)
            done();
        })
    })
})

//Update
describe("Test Update Unit", function(){
    it("Success Update Unit", function(done){
        api.put("/units/"+global.unit)
        .set('Content-Type', 'Application/json')
        .set('Authorization', 'Bearer ' + global.token)
        .send({
            "name": "update-galuh",
            "description": "update-barang"
        })
        .end(function(error, response){
            expect(response.status).to.equals(200)
            //console.log(response.body)
            done();
        })
    })
    it("Failed Update Unit", function(done){
        api.put("/units/unit")
        .set('Content-Type', 'Application/json')
        .set('Authorization', 'Bearer ' + global.token)
        .send({
            "name": "update-galuh",
            "description": "update-barang"
        })
        .end(function(error, response){
            expect(response.status).to.equals(404)
            //console.log(response.body)
            done();
        })
    })
})

//Delete
describe("Test Delete Unit", function(){
    it("Success Delete Unit", function(done){
        api.delete("/units/"+global.unit)
        .set('Content-Type', 'Application/json')
        .set('Authorization', 'Bearer ' + global.token)
        .end(function(error, response){
            expect(response.status).to.equals(200)
            //console.log(response.body)
            done();
        })
    })
    it("Failed Delete Unit", function(done){
        api.delete("/units/unit")
        .set('Content-Type', 'Application/json')
        .set('Authorization', 'Bearer ' + global.token)
        .end(function(error, response){
            expect(response.status).to.equals(404)
            //console.log(response.body)
            done();
        })
    })
})

