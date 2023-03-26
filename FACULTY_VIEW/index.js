//use of get element by ...
let CO = document.getElementById("CO");
let count = document.getElementById("count");
let count2 = document.getElementById("count2");
let question_count = document.getElementById("question_count");
let divof_CO = document.getElementById("divof_CO");
let divof_question = document.getElementById("divof_question");
let afterCO = document.getElementById("afterCO");
let afterquestion = document.getElementById("afterquestion");
let print_current_co = document.getElementById("print_current_co");
let confirmation = document.getElementById("confirmation");
//variables
let num;

let arr = [];
let current_co = 0;


count.addEventListener("click", (e) => {
    e.preventDefault();
    num = CO.value;
    divof_CO.style.display = "none";
    afterCO.innerHTML = `Your total CO s are ${num}<hr>`;
    afterCO.style.display = "block";
    divof_question.style.display = "block";
})

current_co++;
print_current_co.innerHTML = current_co;
count2.addEventListener("click", (e) => {
    e.preventDefault();
    arr[current_co - 1] = question_count.value;
    if (current_co >= num) {
        divof_question.style.display = "none";
        afterquestion.style.display = "block";
        confirmation.style.display = "block";
        for (let i = 0; i < num; i++) {
            afterquestion.innerHTML += `<p>Your total Question in ${i + 1} is ${arr[i]}</p><br>`
        }
    }
    current_co++;
    print_current_co.innerHTML = current_co;
})

let reset= document.getElementById("reset")
reset.addEventListener("click",(e)=>{
    e.preventDefault();
    location.reload();
})

let final_submit = document.getElementById("final_submit");
final_submit.addEventListener("click",(e)=>{
    // DATA GOING TO BACKEND
    
    window.location = "question.html";


})

