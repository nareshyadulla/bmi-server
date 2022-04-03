const request = require('supertest')
const app = require('../../app')
const testdata = require('../fixtures/testdata')

describe("POST /analyse-risk", () => {
    it("API should throw error with invalid json", async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send("this is not a json")
        expect(response.statusCode).toBe(501)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("error")
    })
    it("API should return data", async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.normalWeight)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(0)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
    })
    it('API should return invalid data if height is out of range', async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.invalidHeight)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(0)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
        expect(JSON.parse(response.text).data.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 0,
                    Categroy: "Invalid data",
                    Risk: "Invalid data"
                })
            ])
        )
    })
    it('API should return invalid data if weight is out of range', async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.invalidWeight)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(0)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
        expect(JSON.parse(response.text).data.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 0,
                    Categroy: "Invalid data",
                    Risk: "Invalid data"
                })
            ])
        )
    })
    it('API should return under weight with given data', async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.underWeight)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(0)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
        expect(JSON.parse(response.text).data.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 15.4,
                    Categroy: "Underweight",
                    Risk: "Malnutrition risk"
                })
            ])
        )
    })
    it('API should return normal weight with given data', async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.normalWeight)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(0)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
        expect(JSON.parse(response.text).data.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 22.8,
                    Categroy: "Normal weight",
                    Risk: "Low risk"
                })
            ])
        )
    })
    it('API should return overweight with given data', async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.overWeight)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(0)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
        expect(JSON.parse(response.text).data.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 28.7,
                    Categroy: "Overweight",
                    Risk: "Enhanced risk"
                })
            ])
        )
    })
    it('API should return moderatly obese with given data', async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.moderatlyObese)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(1)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
        expect(JSON.parse(response.text).data.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 32.8,
                    Categroy: "Moderately obese",
                    Risk: "Medium risk"
                })
            ])
        )
    })
    it('API should return severel obese with given data', async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.severelObese)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(1)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
        expect(JSON.parse(response.text).data.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 35.6,
                    Categroy: "Severel obese",
                    Risk: "High risk"
                })
            ])
        )
    })
    it('API should return severely obese with given data', async () => {
        const response = await request(app)
            .post("/api/v1/analyse-risk")
            .send(testdata.severelyObese)
        expect(response.statusCode).toBe(200)
        expect(response).toHaveProperty("text")
        expect(JSON.parse(response.text)).toHaveProperty("data")
        expect(JSON.parse(response.text).data).toHaveProperty("noOfOverWeightPeople")
        expect(JSON.parse(response.text).data.noOfOverWeightPeople).toBe(1)
        expect(JSON.parse(response.text).data).toHaveProperty("bmiInfo")
        expect(JSON.parse(response.text).data.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 42.4,
                    Categroy: "Severely obese",
                    Risk: "Very high risk"
                })
            ])
        )
    })
})
