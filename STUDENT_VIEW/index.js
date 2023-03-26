

//input
// let arr = JSON.parse('[[["dasd","adadas"],["dada","dasdasd"]],[["dad"],["dasd"]],[["addad","adadasd"],["dad"]]]')
let arr = JSON.parse('[[["how many","10","40","50","60"],["when","a","b","c","d"]],[["helo","helloo"],["why","bcz"]],[["name","a","k"],["address","mvr","jnd","ahmdabad"],["whya","a"],["3","1","2","3"]],[["4","1","2","3","4"],["5","5","4","3","2","1"],["lorme","a","1","2"]],[["hwo"],["11","a","1","2"],["12","a","1","2"],["13","a","1","2"],["2","a","1","2"],["3","a","1","2"]]]')
let final_submit = document.getElementById("final_submit")
let reset = document.getElementById("reset")
let root = document.getElementById("root")
// console.log(root)

// console.log(arr .length)
for (let j = 0; j < arr.length; j++) {
    root.innerHTML += `<div class="COindicator">for CO-${j + 1}</div>`

    for (let i = 0; i < arr[j].length; i++) {
        root.innerHTML += `<div class="loadquestion" id="Question-${j + 1}-${i + 1}">
        Question ${i + 1}:- ${arr[j][i][0]}
        <br>`
        for (let x = 1; x < arr[j][i].length; x++) {
            root.innerHTML += `<div class="options"><input type="radio" id="${j + 1}-${i + 1}-${x + 1}" name="${j + 1}-${i + 1}" value="${arr[j][i][x]}">
        <label for="${j + 1}-${i + 1}-${x + 1}">${arr[j][i][x]}</label></div></div>`


        }


    } root.innerHTML += `<hr>`
}
let ele;
let data=new Array;
final_submit.addEventListener("click", (e) => {
    e.preventDefault();
    for (let j = 0; j < arr.length; j++) {
        data[j]=new Array;
        for (let x = 0; x < arr[j].length; x++) {
            ele = document.getElementsByName(`${j+1}-${x+1}`)
            for (let i = 0; i < ele.length; i++) {
                if (ele[i].checked) {
                    data[j][x]=ele[i].value;
                }
            }
        }
    }
})

reset.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
})