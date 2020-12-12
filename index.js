import {Request} from "./request.js";
import {UI} from "./ui.js";
//Elementleri seçme


const searchInput = document.getElementById("search-input").addEventListener("keyup",searchJobs);


const request=new Request("http://localhost:3000/Jobs");
const ui=new UI();


eventListeners();

function searchJobs(event) {
        console.log("merhaba dünya");
        const inputValue=event.target.value.toLowerCase();
        const rowItems=document.querySelectorAll(".no-gutters")
        rowItems.forEach(function(rowItem){
            const text=rowItem.textContent.toLocaleLowerCase();
            if(text.indexOf(inputValue)===-1)
            {
                rowItem.setAttribute("style","display:none!important")
            }
            else{
                rowItem.setAttribute("style","display:block!important")
            }
            
            
});

}

function eventListeners(){
    document.addEventListener("DOMContentLoaded",getAllJobs);


}

function getAllJobs(){
    request.get().then(jobs=>{
        ui.addAllJobsToUI(jobs);

    })
    .catch(err=>console.log(err));  

}
request.get().then(jobs=>console.log(jobs))
.catch(err=>console.log(err));






