let btn = document.querySelector("button")  
let ul = document.querySelector("ul") 
btn.addEventListener("click", function (){

    // Crear elementos 
    let li = document.createElement("li")  
    let text = document.querySelector("input").value;

    if (text.trim() !==""){

        // Creación de elementos 
        let li = document.createElement("li")
        li.textContent = text 

        // Adjuntar  nuevo elemento creado dentro de ul
        li.appendChild(addDeletBtn()) // <li> texto <button> </li> 
        ul.appendChild(li)   
    }
 

})

function addDeletBtn(params) { 
    let deletBtn = document.createElement("button"); 
    deletBtn.textContent = "❌";

    deletBtn.addEventListener("click", (e)=>{ 
        let item = e.target.parentElement; 
        ul.removeChild(item) 

    })  

    return deletBtn; 
    
}