# BMI Server
## Asumptions
 - Assuming invalid weight ranges are < 0 and > 250kgs
 - Assuming invalid height ranges are < 0 and > 250cms
 - I have used same looup for category and risk. We can use different lookups if the range is different for each category and risk

## To run tests 
 - set NODE_ENV = 'test'
 - set PORT
 - execute ```npm run test```

## To run the app
 - set NODE_ENV = 'develop'
 - set PORT
 - execute ```npm run start```

## Notes
 - Intentionally commiting ```.env``` file to the git. 
