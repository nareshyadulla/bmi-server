const bmiService = require('../services/bmi.service')
const bmiController = {}

bmiController.analyseRisk = (req, res, next) => {
    try {
        const riskAnalysis = bmiService.riskAnalysis(req.body)
        res.status(200).json({data: riskAnalysis})
    } catch (error) {
        next(error)
    }
}
module.exports = bmiController