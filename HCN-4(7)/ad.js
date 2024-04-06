const adviceid = document.getElementById("ad-id");
const adviceTxt = document.getElementById("ad-text");
const adviceBtn = document.getElementById("btn");
//const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const {slip:{id,advice}} = await res.json();
    adviceid.innerText = id;
    adviceTxt.innerText = advice;
}  

getAdvice()

adviceBtn.addEventListener("click",getAdvice)
