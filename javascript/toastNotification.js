
const button = document.querySelectorAll("button");
const toast = document.querySelector(".toast")
button.forEach(btn=>{
     btn.addEventListener("click",(e)=>{
        const div = document.createElement("div");
      
        if(e.target.innerHTML == "Success"){
            div.innerHTML = `<i class="fa-solid fa-check"></i>success`;
            div.classList.add("text")
            div.classList.add("success")
            toast.append(div)
        }
        else if(e.target.innerHTML == "Invalid"){
            div.innerHTML = `<i class="fa-solid fa-exclamation"></i>Invalid`;
            div.classList.add("text")
            div.classList.add("invalid")
            toast.append(div)
        }
        else if(e.target.innerHTML == "Error"){
            div.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>Error`;
            div.classList.add("text")
            div.classList.add("error")
            toast.append(div)
        }
        setTimeout(() => {
            div.remove()
        }, 6000);
      
      
     })
})