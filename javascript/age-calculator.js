const dob = document.querySelector("#dob");
const form = document.querySelector("form");
const p = document.querySelector("p")


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let birthdayDate = new Date(dob.value);
    let d1 = birthdayDate.getDate();
    let m1 = birthdayDate.getMonth()+1;
    let y1 = birthdayDate.getFullYear();

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth()+1;
    let y2 = todayDate.getFullYear();

    let d3,m3,y3;

    y3 = y2-y1;

    if(m2>m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12+m2-m1;
    }

    if(d2>d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3 = getDaysInMonths(y1,m1)+d2-d1;

    }
    if(m3 < 0){
         m3 = 11;
         y3--
    }

    if(dob.value == ""){
         p.innerHTML = "Invalid";
         p.style.color = "red";
         p.style.display = "block"
         setTimeout(() => {
            p.style.display = "none"
         }, 1000);
    }
    else{
        if(m3 === 1){
            p.innerHTML = `${y3} years ${m3}month ${d3} days old`;
            p.style.color = "purple";
           }
           else{
            p.innerHTML = `${y3} years ${m3}months ${d3} days old`;
            p.style.color = "purple";
           }
           p.style.display = "block"
    }
})

function getDaysInMonths(year,month){
     return new Date(year,month,0).getDate();
}