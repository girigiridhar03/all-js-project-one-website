const textArea = document.querySelector("#txt-area");
const searchBtn = document.querySelector("#search-btn");
const weatherImg = document.querySelector(".weather-img");
const eror = document.querySelector(".error");
const temp = document.querySelector(".temp");
const cityname = document.querySelector(".city-name");
const hum = document.querySelector(".hum");
const speed = document.querySelector(".speed");
const weatherdetails = document.querySelector(".weather-details");

searchBtn.addEventListener("click",(e)=>{
     e.preventDefault();
     let textValue = textArea.value;
     
     weather(textValue);
     
     textArea.value = ""
})

const weather = async(value)=>{
        let res  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=230f9a2cf5d090243bdaf48ec55a661c&units=metric`);
        if(value == "" || res.status == 400 || res.status == 404){
            eror.innerHTML = "Invalid" ;
            eror.style.display = "block";
            weatherdetails.style.display = "none"
            setTimeout(() => {
                eror.style.display = "none"
            }, 2000);
            console.log("fuck")
        }
        else{
            weatherdetails.style.display = "block"
            let data = await res.json();
            temp.innerHTML = `${Math.round(data.main.temp)}°C`;
            cityname.innerHTML = data.name;
            hum.innerHTML = data.main.humidity+"%";
            speed.innerHTML = `${data.wind.speed}km/h`;

            if(data.weather[0].main == "Clear"){
                 weatherImg.src = "../images/weather-images/clear.png"
            }
           else if(data.weather[0].main == "Clouds"){
                 weatherImg.src = "../images/weather-images/clouds.png"
            }
           else if(data.weather[0].main == "Drizzle"){
                 weatherImg.src = "../images/weather-images/drizzle.png"
            }
           else if(data.weather[0].main == "Mist"){
                 weatherImg.src = "../images/weather-images/mist.png"
            }
           else if(data.weather[0].main == "Snow"){
                 weatherImg.src = "../images/weather-images/snow.png"
            }
          else  if(data.weather[0].main == "Rain"){
                 weatherImg.src = "../images/weather-images/rain.png"
            }

          
        }



}


