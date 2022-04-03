const express = require('express')
const router = express.Router()
const bmiController = require('../controllers/bmi.controller')

/**
 * @swagger
 * /api/v1/analyse-risk:
 *   post:
 *     summary: accepts the list of objects and calculates the BMI and risk level.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  Gender: 
 *                    type: string
 *                    in: body
 *                    example: Male
 *                  HeightCm: 
 *                    type: integer
 *                    in: body
 *                    example: 171
 *                  WeightKg: 
 *                    type: integer
 *                    in: body
 *                    example: 70
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     noOfOverWeightPeople:
 *                       type: integer
 *                       description: no of overweight people in the given list.
 *                       example: 0
 *                     bmiInfo:
 *                       type: array
 *                       items:
 *                          type: object
 *                          properties:
 *                            Gender:
 *                              type: string
 *                              description: Gender of the person.
 *                              example: Male
 *                            HeightCm:
 *                              type: integer
 *                              description: Height of the person in cm.
 *                              example: 171
 *                            WeightKg:
 *                              type: integer
 *                              description: Weight of the person in kgs.
 *                              example: 70
 *                            Bmi:
 *                              type: number
 *                              description: Calculated Bmi from the given inputs.
 *                              example: 23.9
 *                            Categroy:
 *                              type: string
 *                              description: Obase category.
 *                              example: Normal weight
 *                            Risk:
 *                              type: string
 *                              description: Risk.
 *                              example: Low risk

*/
router.post('/analyse-risk', bmiController.analyseRisk)

module.exports = router
