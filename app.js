let input = document.getElementById("inp")
let btn = document.getElementById("btn")
let cityName = document.getElementById("cityName")
let temp = document.getElementById("temp")
let desc = document.getElementById("desc")
let result = document.querySelector(".result")

let API_KEY = "8165357328af48ceaef18225acaa88a4";
let data = []

async function getWeather(city){
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        let response = await fetch(url)
        data =await response.json()

        cityName.innerHTML =  data.name
        temp.innerHTML = `${Math.round(data.main.temp)} 'C`;
        desc.innerHTML = data.weather[0].description
        result.classList.remove("hidden")
    }
    catch(error){
        console.log('Xatolik', error);
    }
}
btn.addEventListener('click', ()=>{
    let value = input.value.trim()
    if (value !== ""){
        getWeather(value)
    }
    else{
        alert("Shahar nomini kiriting!")
    }
})
document.addEventListener('keydown', (e)=>{
    if (e.key === "Enter"){
        let value = input.value.trim();
         if (value !== ""){
        getWeather(value);
         }else{
            alert("Shahar nomini kiriting!")
         }
        
    }
});