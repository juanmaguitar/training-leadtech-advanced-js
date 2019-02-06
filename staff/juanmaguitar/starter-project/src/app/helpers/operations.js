export const multiply = (a, b) => a * b
export const division = (a, b) => a / b

const message = 'hello you!'

export default () => {
  const time = +new Date()
  return () => console.log(`${time} ${message}`)
}
