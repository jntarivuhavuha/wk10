const apiURL = 
 "//api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=2aae4e33100f691521d10a59b4d392f0";

 fetch(apiURL)
 .then((response) => response.json())
 .then((jsonObject) => {
   console.log(jsonObject);
   document.getElementById("current-temp").textContent = jsonObject.main.temp;

   const imagesrc =
   "//openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
 const desc = jsonObject.weather[0].description;
 document.getElementById("imagesrc").textContent = imagesrc;
 document.getElementById("icon").setAttribute("src", imagesrc);
 document.getElementById("icon").setAttribute("alt", desc);
});



   





   


   



   

   



   


   
  



   





   


   



   

   



   


   




   

