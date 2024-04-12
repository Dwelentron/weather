import { GoSearch } from "react-icons/go";
import { TiWeatherPartlySunny } from "react-icons/ti";
export default function Weatherapp(){
    let apiKey="a094b24fb426ea702230cd313c0bcea1"
    const search = async ()=>{
        const element=document.getElementsByClassName("search")

        if(element[0]===""){
            alert("enter a valid city ");
            return 
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`

        let response= await fetch(url)
        let data = await response.json()

        let humidity=document.getElementsByClassName("humidity")
        let wind=document.getElementsByClassName("wind")
        let temp=document.getElementsByClassName("one")
        let location=document.getElementsByClassName("one1")

        humidity[0].innerHTML=data.main.humidity+ "%"
        wind[0].innerHTML=Math.floor(data.wind.speed) + "Km/h"
        temp[0].innerHTML=Math.floor(data.main.temp) + "°C"
        location[0].innerHTML=data.name

    }
    return(
        <div className="">
        <div className="top">
            <div className="flex ">
                <span className="flex items-center mx-auto">
                    <input type="search" placeholder="Enter City Name" className="search rounded-3xl p-3 pl-4 text-2xl mt-3 hover:bg-gray-300 text-blue-700 font-bold"/>
                    <GoSearch className="m-1 text-2xl hover:text-3xl hover:text-green-800" onClick={()=>{search()}} />
                </span> 
            </div>
        </div>
        <div>
        {/* <TiWeatherPartlySunny  className="mx-auto mt-16"/> */}
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt="" className="mx-auto mt-16 w-56" />
        <div className="mt-6 text-center">
            
            <span>
                <p className="one text-white ">24<sup>0</sup>C</p>
                <span className="one1">
                Nairobi
                </span>
            </span>


            <div className="four flex gap-10">
                <span className="flex items-center">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/011/652/634/small/humidity-3d-render-icon-illustration-png.png" alt="" className="w-24"/>
                    <div>
                    <p className="text-white text-xl font-bold">Humidity</p>
                    <p className="humidity text-blue-400 text-4xl">70%</p>
                    </div>  
                </span>
                <span className="flex items-center">
                    <img src="https://www.freeiconspng.com/thumbs/windy-png/windy-png-11.png" alt="" className="w-24"/>
                    <div>
                    <p className="text-white text-xl font-bold">WindSpeed</p>
                    <p className="wind text-blue-400 text-4xl">20kwh</p>
                    </div>  
                </span>
            </div>
            <img src="" alt="" />
            
            
            
        </div>
        </div>
        </div>
    )
}