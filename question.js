let arr=[2,2];
let data=new Array,flag=0;


let final_submit = document.getElementById("final_submit");
let loadquestion= document.getElementById("loadquestion")
let confirmation2= document.getElementById("confirmation2")



for(let j=0;j<arr.length;j++){
    loadquestion.innerHTML+=`<div class="COindicator">for CO-${j+1}</div>`
    
    for(let i=0;i<arr[j];i++)
    {
        loadquestion.innerHTML+=`<div class="loadquestion">
        Question ${i+1}:-
        <div>
        <textarea id="question-${j+1}-${i+1}" class="textarea" placeholder="Question title" name="question"></textarea></div>
        <hr>
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
            data[j][i] =  document.getElementById(`question-${j+1}-${i+1}`).value;
        }
    }
    }
    // DATA GOING TO BACKEND
       
    )
        
    

    
    
    
    let reset= document.getElementById("reset")
    reset.addEventListener("click",(e)=>{
        e.preventDefault();
        location.reload();
    })
    