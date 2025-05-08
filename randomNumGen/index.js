alert(
    "Click the button to generate a randome numbers between 1 to 50."
)
let rollBtn = document.getElementById("rollBtn");
let resetBtn = document.getElementById("resetBtn");
let label1 = document.getElementById("label1");
const min = 1, max = 50;
let randomNum;
rollBtn.onclick = function() {
    randomNum = Math.floor(Math.random() * (max-min)) + min;
    label1.textContent = randomNum;
}

resetBtn.onclick = function(){
    randomNum = 0;
    label1.textContent = randomNum;
}