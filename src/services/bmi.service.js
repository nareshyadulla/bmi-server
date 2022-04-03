const bmiLookup = require('../lookups/bmi.lookup')
const bmiService = {}
bmiService.riskAnalysis = (rawData) => {
    let noOfOverWeightPeople = 0
    rawData.forEach(element => {
        if (!element.WeightKg || element.WeightKg < 0 || element.WeightKg > 250 || !element.HeightCm || element.HeightCm < 0 || element.HeightCm > 250) {
            element.Bmi = 0
        } else {
            element.Bmi = Math.round((element.WeightKg / (element.HeightCm * element.HeightCm)) * 100000) / 10
        }
        const { category, risk } = bmiLookup.getCategoryAndRisk(element.Bmi)
        element.Categroy = category
        element.Risk = risk
        noOfOverWeightPeople += element.Bmi >= bmiLookup.overWeightThreshold ? 1 : 0
    });
    return {
        noOfOverWeightPeople,
        bmiInfo: rawData
    }
}
module.exports = bmiService