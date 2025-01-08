var city = document.getElementById("city");
    function weather() {
      var city = document.getElementById("city").value;

      var request = new XMLHttpRequest();
      request.open(
        "get",
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=530acc148885180c5866d1703ed66284`
      );

      request.send();
      request.onload = function () {
        movies = JSON.parse(request.responseText);
        console.log(movies);
        document.getElementById("temp").innerText =
          "Temperature: " + movies.main.temp + "°F";
        document.getElementById("rise").innerText =
          "Sunrise:" + movies.sys.sunrise;
        document.getElementById("set").innerText =
          "Sunrise:" + movies.sys.sunset;
        document.getElementById("long").innerText =
          "Longitude:" + movies.coord.lon;
        document.getElementById("lat").innerText =
          "Latitude:" + movies.coord.lat;
        var sunrise = document.createElement("img");
        sunrise.setAttribute("src", "sunrise.png");
        var sunset = document.createElement("img");
        sunset.setAttribute("src", "sunset.png");
        document.getElementById("sunrise").append(sunrise);
        document.getElementById("sunset").append(sunset);
        var humidity = document.createElement("p");
        humidity.innerText = "Humidity:" + movies.main.humidity;
        document.getElementById("humidity").append(humidity);
        var haze = document.createElement("p");
        var img = document.createElement("img");
        img.setAttribute(
          "src",
          "http://openweathermap.org/img/wn/" + movies.weather[0].icon + ".png"
        );
        haze.innerText = movies.weather[0].main;

        document.getElementById("haze").append(haze);
        document.getElementById("haze").append(img);
        city.value = "";
      };
    }
