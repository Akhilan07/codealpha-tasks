
filterSelection("all");
function filterSelection(c){
let x=document.getElementsByClassName("filter");
for(let i=0;i<x.length;i++){
x[i].classList.remove("hide");
if(c!="all" && !x[i].classList.contains(c))
x[i].classList.add("hide");
}}
