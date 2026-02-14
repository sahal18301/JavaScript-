function sayMyName() {
    console.log("hello" + " yahya")
}

let timer = setInterval(sayMyName,1000)

setTimeout(function () {
    
clearInterval(timer)
}, 10000)

// let timer = setInterval(sayMyName, 1000)


// clearInterval(timer)