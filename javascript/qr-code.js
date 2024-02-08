const qrInput = document.querySelector("#qr-input");
const button = document.querySelector("button");
const p = document.querySelector("p");
const code = document.querySelector(".code")
button.addEventListener("click",async()=>{

    if(qrInput.value.length > 0){

        const img = document.createElement("img");
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
        code.append(img);
    }
    else{
        p.style.display = "block";
        setTimeout(() => {
            p.style.display = "none";
        }, 1000);
    }
    qrInput.value = ""
})