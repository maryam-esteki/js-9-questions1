//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:
alert("wait 5 sec")
setTimeout(()=>{
  alert("ready?")

  let i = 1

const timer = setInterval(()=>{
    alert("🚀")

    if(i === 10){
        clearInterval(timer)
    }
    console.log(i++)
},1000)
},5000)

