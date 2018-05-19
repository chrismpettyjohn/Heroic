console.log('\n\n\n\n\n\n\n')// Async functions
async function one() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 10000)
  })
}

async function two() {
  console.log(2)
  return;
}

async function three() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(3)
      resolve()
    }, 1000)
  })
}

// Primary Function
async function init() {
  await one()
  await two()
  await three(0)
}


// Call It
init()
