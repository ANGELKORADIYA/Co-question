let arr=[2,2,4,5,6];
let data=new Array,flag=0;


let final_submit = document.getElementById("final_submit");
let loadquestion= document.getElementById("loadquestion")
let confirmation2= document.getElementById("confirmation2")
let addoption;


for(let j=0;j<arr.length;j++){
    loadquestion.innerHTML+=`<div class="COindicator">for CO-${j+1}</div>`
    
    for(let i=0;i<arr[j];i++)
    {
        loadquestion.innerHTML+=`<div class="loadquestion">
        Question ${i+1}:-
        <div>
        <textarea id="question-${j+1}-${i+1}" class="textarea" placeholder="Question title" name="question"></textarea></div>
        <button class="addoption" id="${j+1}-${i+1}">add Options</button>
        <div id="div-${j+1}-${i+1}"></div>


        </div>`;
        
    }
    
    if(j==arr.length-1){
        confirmation2.style.display="block";
    }
}

final_submit.addEventListener("click", (e)=>{
    e.preventDefault();
    for(let j=0;j<arr.length;j++){
        data[j]= new Array;
        for(let i=0;i<arr[j];i++){
            data[j][i]=new Array;

            data[j][i][0] =  document.getElementById(`question-${j+1}-${i+1}`).value;
                for(let x=1;x<=counter[j][i];x++){
                    option=document.getElementById(`option-${j+1}-${i+1}-${x}`)
                    data[j][i][x]=option.value;
        }
        }
    }}


    // DATA GOING TO BACKEND
    
    )
    
    
    
    
    let reset= document.getElementById("reset")
    reset.addEventListener("click",(e)=>{
        e.preventDefault();
        location.reload();
    })
let counter=new Array()
  let m;
    for(let j=0;j<arr.length;j++){
        counter[j]=new Array;
        for(let i=0;i<arr[j];i++){
            counter[j][i]=0;
            let x=0;
            addoption=document.getElementById(`${j+1}-${i+1}`)
            
            addoption.addEventListener("click",(e)=>{
                e.preventDefault();
                m=document.getElementById(`div-${j+1}-${i+1}`)
                m.innerHTML+=`<div class="options"><input type="radio" id="1" name="1" >
                <label for="1"><input type="text" id="option-${j+1}-${i+1}-${x+1}"></label></div>`
                x++;
                counter[j][i]++;
            })



        // addoption[i+j].addEventListener("click",(e)=>{
        //     e.preventDefault();
        //     m=document.getElementById(`div-${j+1}-${i+1}`)
        //     m.innerHTML+=`1221<div class="options"><input type="radio" id="1" name="1" >
        //     <label for="1"><input type="text"></label></div>`
        // })
    }}