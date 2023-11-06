/*
    Payton Lutterman
    Button Project
    Last Updated 11-3-2023
*/

let clicks = 0;

function btnPressed(){
    const button =  document.getElementById("button");
    button.addEventListener("click", addOne); 
}

function addOne(){
    const id = document.getElementById('clicks')
    clicks ++;
    id.innerHTML = clicks;
    console.log(clicks)
}
