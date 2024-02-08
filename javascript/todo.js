const todoInput = document.querySelector("#todo-input");
const form = document.querySelector("form");
const todoTask = document.querySelector(".todo-task");
const todoCompleted = document.querySelector(".todo-completed");
const p = document.querySelector("p")

form.addEventListener("submit",(e)=>{
     e.preventDefault();
     if(todoInput.value == ""){
         p.style.display = "block"
         setTimeout(()=>{
            p.style.display = "none"
         },1000)
     }
     else{

         let todoValue = todoInput.value;
          const li1 = document.createElement("li");
          li1.innerHTML = todoValue;
          const span = document.createElement("span");
          span.innerHTML = "✔";
          span.classList.add("completed");
    
          li1.append(span);
    
          todoTask.append(li1);

          span.addEventListener("click",()=>{
            li1.remove()
            const li = document.createElement("li");
            li.innerHTML = todoValue;
            const span2 = document.createElement("span");
            span2.innerHTML = "✖";
            span2.classList.add("delete");
            li.append(span2);
            todoCompleted.append(li)
            
            span2.addEventListener("click",()=>{
                 li.remove()
            })
          })
     }
     
     todoInput.value = ""

})