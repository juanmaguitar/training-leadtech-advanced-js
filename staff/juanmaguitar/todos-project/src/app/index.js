import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'

const getDataFromResponse = ({ data }) => data
const getDelayedObjectWithTime = data =>
  new Promise(resolve => {
    const time = Math.floor(Math.random() * 5000)
    setTimeout(() => {
      resolve({ data, time })
    }, time)
  })

axios
  .get(url)
  .then(getDataFromResponse)
  .then(getDelayedObjectWithTime)
  .then(console.log)
