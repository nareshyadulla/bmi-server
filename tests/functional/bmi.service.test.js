const bmiService = require('../../src/services/bmi.service')
const testdata = require('../fixtures/testdata')
describe("BMI service functional testing", () => {
    it('bmi service should have noOfOverWeightPeople key in the returned object', () => {
        expect(bmiService.riskAnalysis(testdata.normalWeight).noOfOverWeightPeople).toBeDefined()
    })
    it('bmi service should have data key in the returned object', () => {
        expect(bmiService.riskAnalysis(testdata.normalWeight).bmiInfo).toBeDefined()
    })
    it('bmi service should return invalid data if height is out of range', () => {
        const results = bmiService.riskAnalysis(testdata.invalidHeight)
        expect(results.noOfOverWeightPeople).toBe(0)
        expect(results.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 0,
                    Categroy: "Invalid data",
                    Risk: "Invalid data"
                })
            ])
        )
    })
    it('bmi service should return invalid data if weight is out of range', () => {
        const results = bmiService.riskAnalysis(testdata.invalidWeight)
        expect(results.noOfOverWeightPeople).toBe(0)
        expect(results.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 0,
                    Categroy: "Invalid data",
                    Risk: "Invalid data"
                })
            ])
        )
    })
    it('bmi service should return under weight with given data', () => {
        const results = bmiService.riskAnalysis(testdata.underWeight)
        expect(results.noOfOverWeightPeople).toBe(0)
        expect(results.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 15.4,
                    Categroy: "Underweight",
                    Risk: "Malnutrition risk"
                })
            ])
        )
    })
    it('bmi service should return normal weight with given data', () => {
        const results = bmiService.riskAnalysis(testdata.normalWeight)
        expect(results.noOfOverWeightPeople).toBe(0)
        expect(results.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 22.8,
                    Categroy: "Normal weight",
                    Risk: "Low risk"
                })
            ])
        )
    })
    it('bmi service should return overweight with given data', () => {
        const results = bmiService.riskAnalysis(testdata.overWeight)
        expect(results.noOfOverWeightPeople).toBe(0)
        expect(results.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 28.7,
                    Categroy: "Overweight",
                    Risk: "Enhanced risk"
                })
            ])
        )
    })
    it('bmi service should return moderatly obese with given data', () => {
        const results = bmiService.riskAnalysis(testdata.moderatlyObese)
        expect(results.noOfOverWeightPeople).toBe(1)
        expect(results.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 32.8,
                    Categroy: "Moderately obese",
                    Risk: "Medium risk"
                })
            ])
        )
    })
    it('bmi service should return severel obese with given data', () => {
        const results = bmiService.riskAnalysis(testdata.severelObese)
        expect(results.noOfOverWeightPeople).toBe(1)
        expect(results.bmiInfo).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Bmi: 35.6,
                    Categroy: "Severel obese",
                    Risk: "High risk"
                })
            ])
        )
    })
    it('bmi service should return severely obese with given data', () => {
        const results = bmiService.riskAnalysis(testdata.severelyObese)
        expect(results.noOfOverWeightPeople).toBe(1)
        expect(results.bmiInfo).toEqual(
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