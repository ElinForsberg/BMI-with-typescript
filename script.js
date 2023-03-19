const bmiDiv = document.querySelector(".bmi");
const submitBtn = document.querySelector(".submitbtn");
let weight = document.getElementById("weight");
let age = document.getElementById("age");
let height = document.getElementById("height");
//submitBtn.addEventListener("click",getBmi); 
submitBtn.addEventListener("click", writeBmi);
submitBtn.addEventListener("click", getBmi);

function writeBmi ( ){
    
    console.log(age.value);
    console.log(weight.value);
    console.log(height.value);
}
function getBmi () {
   const bmi = weight.value / (height.value * height.value / 10000);
   console.log(bmi);
   document.write(`You are ${age.value} years old`);
}
