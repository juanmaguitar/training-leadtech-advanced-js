// Async Management 

function delayExecution( fn ) {
	const time = Math.floor(Math.random()*5000)
	setTimeout(fn(time), time)
}

const logName = (name, time) => {
	console.log(`Hello I'm ${name}`)
	console.log(`delayed ${time}ms`)
}

const logJuanma = logName.bind(null, "juanma")

delayExecution(logJuanma)

// ------------------


const promiseDelayExecution = new Promise( resolve => {
	const time = Math.floor(Math.random()*5000)
	setTimeout(() => { resolve(time) }, time)
})

promiseDelayExecution.then(logJuanma)


// ------------------
