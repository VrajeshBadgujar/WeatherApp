const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const middle_layer = document.querySelector(".middle_layer")
const temp_status = document.getElementById("temp_status");



const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value
  if (cityVal === "") {
    city_name.innerText = "Please Enter a City Name Before Search"
} else {
    try{
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=21e4b146fbf097eaa5281019710d6df0`;
         const response = await fetch(url) ;
         const data = await response.json();
         const arrData = [data]
         middle_layer.classList.remove("data_hide")
         const tempMood = arrData[0].weather[0].main
        //  console.log( arrData[0].weather[0].main);
         city_name.innerText =` ${arrData[0].name}, ${arrData[0].sys.country}`
         temp_real_val.innerHTML = ` ${arrData[0].main.temp}`

         if (tempMood == "Sunny") {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i> "
            }else if (tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6'></i> "
            }
            else if (tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
            }
            else if (tempMood == "Haze"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #4c3de'></i> "
            }
            

    }
    catch{
        city_name.innerText = "Please Enter a Valid City Name"
        middle_layer.classList.add("data_hide")

    }
}};
submitBtn.addEventListener("click", getInfo);
