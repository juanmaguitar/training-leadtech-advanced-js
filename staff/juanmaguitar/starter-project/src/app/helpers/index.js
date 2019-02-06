import sum from './sum'
import factoryLogger, * as operations from './operations'

const logger = factoryLogger()
logger()

const result = sum(2, 3)
console.log(result)

const result2 = operations.multiply(2, 3)
console.log(result2)

const result3 = operations.division(10, 2)
console.log(result3)
