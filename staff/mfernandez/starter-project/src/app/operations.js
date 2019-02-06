export const multiply = (a, b) => a * b
export const division = (a, b) => a / b

const logger = (a) => console.log(a)

export default (a) => {
  const time = +new Date()
  logger(`${time} ${a}`)
}
