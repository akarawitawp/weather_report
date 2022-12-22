import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const apiKey = "65f359485877770e4ff80ed9809752da";
  const [city, setCity] = useState({});
  const [cityName, setCityName] = useState("Bangkok");
  const [loading, setLoading] = useState();

  const getWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    setCity(data);
    setLoading(true);
    console.log(data);
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    loading && (
      <div className="App">
        <section>
          <div className="App">
            <section>
              <div className="location">
                <h1 className="city">{city.name}</h1>
                <p className="state">{city.sys.country}</p>
              </div>
              <div className="card">
                <div className="weather">
                  <h1>อุณหภูมิเฉลี่ย {city.main.temp}</h1>
                  <small>
                    อุณหภูมิสูงสุด : {city.main.temp_max} องศา อุณหภูมิต่ำสุด :{" "}
                    {city.main.temp_min} องศา
                  </small>
                </div>
                <div className="info">
                  <div className="status">
                    สภาพอากาศ : {city.weather[0].main}
                  </div>
                  <div className="humidity">
                    ความชื่น : {city.main.humidity}
                  </div>
                  <div classNAme="wind"> ความเร็วลม : {city.wind.speed}</div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="Search-box">
          <input
            className="input-container"
            type="text"
            onChange={(event) => {
              setCityName(event.target.value);
            }}
          />
          <button className="button-container" onClick={getWeather}>
            เลือกเมือง
          </button>
        </div>
      </div>
    )
  );
}

export default App;
