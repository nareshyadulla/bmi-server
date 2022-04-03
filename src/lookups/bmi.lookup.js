const bmiConstants = require('../constants/bmi.constants')
const bmiLookup = {}
bmiLookup.overWeightThreshold = 30
bmiLookup.getCategoryAndRisk = (bmi) => {
    let category = ''
    let risk = ''
    if(bmi <= 0){
        category = bmiConstants.CATEGORY_INVALID
        risk = bmiConstants.RISK_INVALID
    } else if (bmi <= 18.4) {
        category = bmiConstants.CATEGORY_UNDER_WEIGHT
        risk = bmiConstants.RISK_MALNUTRITION_RISK
    } else if (bmi <= 25) {
        category = bmiConstants.CATEGORY_NORMAL_WEIGHT
        risk = bmiConstants.RISK_LOW
    } else if (bmi <= 30) {
        category = bmiConstants.CATEGORY_OVERWEIGHT
        risk = bmiConstants.RISK_ENHANCED
    } else if (bmi <= 35) {
        category = bmiConstants.CATEGORY_MODERATELY_OBESED
        risk = bmiConstants.RISK_MEDIUM
    } else if (bmi <= 40) {
        category = bmiConstants.CATEGORY_SEVEREL_OBESED
        risk = bmiConstants.RISK_HIGH
    } else {
        category = bmiConstants.CATEGORY_SEVERELY_OBESED
        risk = bmiConstants.RISK_VERY_HIGH
    }
    return { category, risk }
}
module.exports = bmiLookup