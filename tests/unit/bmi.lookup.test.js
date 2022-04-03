const bmiLookup = require('../../src/lookups/bmi.lookup')
const constants = require('../../src/constants/bmi.constants')
describe("BMI unit testing", () => {
    it('category should be invalid if bmi <= 0', () => {
        expect(bmiLookup.getCategoryAndRisk(0).category).toBe(constants.CATEGORY_INVALID)
    })
    it('risk should be invalid if bmi <= 0', () => {
        expect(bmiLookup.getCategoryAndRisk(0).risk).toBe(constants.RISK_INVALID)
    })
    it('category should be under weight if bmi <= 18.4', () => {
        expect(bmiLookup.getCategoryAndRisk(18).category).toBe(constants.CATEGORY_UNDER_WEIGHT)
    })
    it('risk should be malnutrition if bmi <= 18.4', () => {
        expect(bmiLookup.getCategoryAndRisk(18).risk).toBe(constants.RISK_MALNUTRITION_RISK)
    })
    it('category should be under weight if bmi > 18.4 and bmi <= 25', () => {
        expect(bmiLookup.getCategoryAndRisk(20).category).toBe(constants.CATEGORY_NORMAL_WEIGHT)
    })
    it('risk should be malnutrition if bmi > 18.4 and bmi <= 25', () => {
        expect(bmiLookup.getCategoryAndRisk(20).risk).toBe(constants.RISK_LOW)
    })
    it('category should be overweight if bmi > 25 and bmi <= 30', () => {
        expect(bmiLookup.getCategoryAndRisk(26).category).toBe(constants.CATEGORY_OVERWEIGHT)
    })
    it('risk should be enhanced if bmi > 25 and bmi <= 30', () => {
        expect(bmiLookup.getCategoryAndRisk(26).risk).toBe(constants.RISK_ENHANCED)
    })
    it('category should be moderately obese if bmi > 30 and bmi <= 35', () => {
        expect(bmiLookup.getCategoryAndRisk(31).category).toBe(constants.CATEGORY_MODERATELY_OBESED)
    })
    it('risk should be medium if bmi > 30 and bmi <= 35', () => {
        expect(bmiLookup.getCategoryAndRisk(31).risk).toBe(constants.RISK_MEDIUM)
    })
    it('category should be severel obese if bmi > 35 and bmi <= 40', () => {
        expect(bmiLookup.getCategoryAndRisk(36).category).toBe(constants.CATEGORY_SEVEREL_OBESED)
    })
    it('risk should be high if bmi > 35 and bmi <= 40', () => {
        expect(bmiLookup.getCategoryAndRisk(36).risk).toBe(constants.RISK_HIGH)
    })
    it('category should be severely obese if bmi > 40', () => {
        expect(bmiLookup.getCategoryAndRisk(41).category).toBe(constants.CATEGORY_SEVERELY_OBESED)
    })
    it('risk should be very high if bmi > 40', () => {
        expect(bmiLookup.getCategoryAndRisk(41).risk).toBe(constants.RISK_VERY_HIGH)
    })
})