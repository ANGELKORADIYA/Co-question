let counter=new Array()
let data=new Array;
let arr=[2,2,2];
let a;
let answer =new Array;
let discliamer;
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
        <textarea id="question-${j+1}-${i+1}" class="textarea" placeholder="Question title" name="question" required></textarea></div>
        <button class="addoption" id="addbutton-${j+1}-${i+1}">add Options</button>
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
                    let option=document.getElementById(`option-${j+1}-${i+1}-${x}`)
                    data[j][i][x]=option.value;

        }

        }

    }
    for(let j=0;j<arr.length;j++){
        for(let i=0;i<arr[j];i++){
            // for(let x=0;x<=counter[j][i];x++){
                    if(data[j][i][0]=='')   {
                    a= document.getElementById(`question-${j+1}-${i+1}`)
                    a.outerHTML+=`<div class="discliamer" id="a-${j}-${i}">Please Enter Value</div>`
                    discliamer=document.getElementById(`a-${j}-${i}`)
                    discliamer.style.display="inline";
                    
            }}}
            for(let j=0;j<arr.length;j++){
                answer[j]=new Array;
                for(let i=0;i<arr[j];i++){
                    let z= document.querySelectorAll(`input[name="${j+1}-${i+1}"]`)
                    
                    for(let x=0;x<=counter[j][i];x++){
                        if(z[x]!=null){
                        if(z[x].checked){
                            answer[j][i]=document.getElementById(`option-${j+1}-${i+1}-${x+1}`).value;

                        }
                    }


                    }}
                }
        }
    // DATA,ANSWER GOING TO BACKEND
    
    )
    
    
    
    
    let reset= document.getElementById("reset")
    reset.addEventListener("click",(e)=>{
        e.preventDefault();
        location.reload();
    })
  let m;
    for(let j=0;j<arr.length;j++){
        counter[j]=new Array;
        for(let i=0;i<arr[j];i++){
            counter[j][i]=0;
            let x=0;
            addoption=document.getElementById(`addbutton-${j+1}-${i+1}`)
            
            addoption.addEventListener("click",(e)=>{
                e.preventDefault();
                m=document.getElementById(`div-${j+1}-${i+1}`)
                m.innerHTML+=`<div class="options"><input type="radio" id="radio-${j+1}-${i+1}-${x+1}" name="${j+1}-${i+1}" required>
                <label for="${j+1}-${i+1}-${x+1}"><input type="text" id="option-${j+1}-${i+1}-${x+1}" required></label></div>`
                x++;
                counter[j][i]++;
            })
    }}



    