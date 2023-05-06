let inpValue = (document.querySelector(".input-box"))
const equalbtn = document.querySelector(".equal-btn")
const allClearbtn = document.querySelector(".all-clear-btn")
const deletebtn =  document.querySelector(".delete-btn")

let myBtns = document.querySelectorAll(".js-btn")
console.log(myBtns)

for(let i = 0; i < myBtns.length; i++){
  myBtns[i].addEventListener("click",function(){  
    console.log("clicked")
    console.log(myBtns[i])


    inpValue.value += myBtns[i].innerHTML


})
}

equalbtn.addEventListener("click",function(){

  inpValue.value = eval(inpValue.value)
 
})


allClearbtn.addEventListener("click",function allClearFunc(){


  inpValue.value = ""

})

deletebtn.addEventListener("click",function(){

  // console.log( inpValue.value.length)

  let inpValueForLength = inpValue.value
  let lengthofInput = inpValueForLength.length


   inpValue.value = inpValueForLength.slice(0,lengthofInput-1)


  

})
