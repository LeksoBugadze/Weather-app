const output=document.querySelector('#output');
const cityName=document.querySelector('#city-name');
const citycords=document.querySelector('#city-coordinates');
const unitSelector=document.querySelector('#unit-selector');
const countryForm=document.querySelector('#submit-form');
const input=document.querySelector('#country-input');


const date = new Date();
const year = date.getFullYear().toString().slice(-2); 
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0'); 
const today = `20${year}-${month}-${day}`;


const compassSvg='<svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22.912 8.758l-9.786 4.207c-0.177 0.090-0.32 0.233-0.411 0.411l-4.483 9.038c-0.184 0.36-0.117 0.798 0.166 1.087 0.181 0.184 0.426 0.282 0.673 0.282 0.139 0 0.279-0.030 0.41-0.094l9.554-3.968c0.175-0.084 0.32-0.221 0.413-0.391l4.715-9.278c0.201-0.363 0.141-0.813-0.145-1.111-0.288-0.298-0.737-0.371-1.105-0.184zM11.183 20.776l2.719-5.553 2.746 3.437zM18.272 17.488l-2.775-3.473 5.525-2.18zM16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032z"></path> </g></svg>';
const humiditySvg='<svg fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 328.611 328.611" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M209.306,50.798c-2.452-3.337-7.147-4.055-10.485-1.602c-3.338,2.453-4.055,7.147-1.603,10.485 c54.576,74.266,66.032,123.541,66.032,151.8c0,27.691-8.272,52.794-23.293,70.685c-17.519,20.866-42.972,31.446-75.651,31.446 c-73.031,0-98.944-55.018-98.944-102.131c0-52.227,28.103-103.234,51.679-136.829c25.858-36.847,52.11-61.415,52.37-61.657 c3.035-2.819,3.209-7.565,0.39-10.6c-2.819-3.034-7.565-3.209-10.599-0.39c-1.11,1.031-27.497,25.698-54.254,63.765 c-24.901,35.428-54.586,89.465-54.586,145.71c0,31.062,9.673,59.599,27.236,80.353c20.361,24.061,50.345,36.779,86.708,36.779 c36.794,0,66.926-12.726,87.139-36.801c17.286-20.588,26.806-49.117,26.806-80.33C278.25,156.216,240.758,93.597,209.306,50.798z"></path> <path d="M198.43,148.146l-95.162,95.162c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197 s3.839-0.732,5.304-2.197l95.162-95.162c2.929-2.929,2.929-7.678,0-10.606C206.107,145.217,201.359,145.217,198.43,148.146z"></path> <path d="M191.965,207.899c-13.292,0-24.106,10.814-24.106,24.106s10.814,24.106,24.106,24.106s24.106-10.814,24.106-24.106 S205.257,207.899,191.965,207.899z M191.965,241.111c-5.021,0-9.106-4.085-9.106-9.106s4.085-9.106,9.106-9.106 s9.106,4.085,9.106,9.106S196.986,241.111,191.965,241.111z"></path> <path d="M125.178,194.162c13.292,0,24.106-10.814,24.106-24.106s-10.814-24.106-24.106-24.106s-24.106,10.814-24.106,24.106 S111.886,194.162,125.178,194.162z M125.178,160.949c5.021,0,9.106,4.085,9.106,9.106s-4.085,9.106-9.106,9.106 c-5.021,0-9.106-4.085-9.106-9.106S120.156,160.949,125.178,160.949z"></path> </g> </g></svg> ';
const tempSvg='<svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M281.12,353.354V42.221C281.12,18.941,262.18,0,238.899,0c-23.282,0-42.221,18.941-42.221,42.221v311.133 c-26.391,15.093-42.646,42.761-42.756,73.36c-0.078,21.959,8.481,42.96,24.097,59.132c15.624,16.179,36.315,25.453,58.26,26.115 c0.886,0.026,1.767,0.04,2.649,0.04c22.227-0.001,43.14-8.461,59.142-23.987c16.642-16.149,25.806-37.809,25.806-60.992 C323.875,396.291,307.619,368.505,281.12,353.354z M286.905,476.506c-13.496,13.095-31.316,20.003-50.142,19.427 c-17.741-0.534-34.507-8.072-47.21-21.226c-12.701-13.152-19.661-30.176-19.597-47.937c0.093-26.181,14.773-49.723,38.31-61.438 c2.724-1.355,4.444-4.136,4.444-7.177V42.221c0-14.44,11.748-26.188,26.188-26.188c14.44,0,26.188,11.748,26.188,26.188v315.935 c0,3.042,1.721,5.821,4.444,7.177c23.632,11.762,38.311,35.4,38.311,61.689C307.842,445.831,300.407,463.405,286.905,476.506z"></path> </g> </g> <g> <g> <path d="M246.915,376.889V93.528c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v283.361 c-24.2,3.855-42.756,24.866-42.756,50.133c0,27.995,22.777,50.772,50.772,50.772c27.995,0,50.772-22.777,50.772-50.772 C289.671,401.755,271.115,380.744,246.915,376.889z M238.899,461.761c-19.155,0-34.739-15.584-34.739-34.739 c0-19.155,15.584-34.739,34.739-34.739s34.739,15.584,34.739,34.739C273.638,446.177,258.054,461.761,238.899,461.761z"></path> </g> </g> <g> <g> <path d="M350.063,256.534h-42.756c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h42.756 c4.427,0,8.017-3.589,8.017-8.017S354.492,256.534,350.063,256.534z"></path> </g> </g> <g> <g> <path d="M332.961,213.778h-25.653c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653 c4.427,0,8.017-3.589,8.017-8.017C340.978,217.368,337.388,213.778,332.961,213.778z"></path> </g> </g> <g> <g> <path d="M350.063,171.023h-42.756c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h42.756 c4.427,0,8.017-3.589,8.017-8.017C358.08,174.612,354.492,171.023,350.063,171.023z"></path> </g> </g> <g> <g> <path d="M332.961,128.267h-25.653c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653 c4.427,0,8.017-3.589,8.017-8.017C340.978,131.856,337.388,128.267,332.961,128.267z"></path> </g> </g> <g> <g> <path d="M350.063,85.511h-42.756c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h42.756 c4.427,0,8.017-3.589,8.017-8.017C358.08,89.101,354.491,85.511,350.063,85.511z"></path> </g> </g> </g></svg>';
const windSvg='<svg fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 365.447 365.447" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M306.069,189.427H7.5c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h297.119c0.469-0.092,0.954-0.14,1.45-0.14 c24.47,0,44.378-19.908,44.378-44.378S330.539,85.53,306.069,85.53s-44.378,19.908-44.378,44.378c0,4.142-3.357,7.5-7.5,7.5 s-7.5-3.358-7.5-7.5c0-32.741,26.637-59.378,59.378-59.378s59.378,26.637,59.378,59.378c0,32.224-25.801,58.535-57.829,59.358 C307.118,189.372,306.601,189.427,306.069,189.427z"></path> </g> <g> <path d="M152.283,137.479H7.5c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h143.333c0.469-0.092,0.954-0.14,1.45-0.14 c24.47,0,44.378-19.908,44.378-44.378s-19.908-44.378-44.378-44.378c-24.471,0-44.379,19.908-44.379,44.378 c0,4.142-3.357,7.5-7.5,7.5s-7.5-3.358-7.5-7.5c0-32.741,26.638-59.378,59.379-59.378s59.378,26.637,59.378,59.378 c0,32.224-25.801,58.535-57.829,59.358C153.332,137.423,152.814,137.479,152.283,137.479z"></path> </g> <g> <path d="M244.186,346.866c-32.741,0-59.379-26.637-59.379-59.378c0-4.142,3.357-7.5,7.5-7.5s7.5,3.358,7.5,7.5 c0,24.47,19.908,44.378,44.379,44.378c24.47,0,44.378-19.908,44.378-44.378s-19.908-44.378-44.378-44.378H7.5 c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h236.686c32.741,0,59.378,26.637,59.378,59.378S276.927,346.866,244.186,346.866z"></path> </g> </g> </g></svg> ';
const gustSvg='<svg fill="#000000" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: none; } </style> </defs> <path d="M29.3164,8.0513l-18-6A1,1,0,0,0,10.4,2.2L4,7V2H2V30H4V11l6.4,4.8a1,1,0,0,0,.9165.1489l18-6a1,1,0,0,0,0-1.8974ZM10,13,4.6665,9,10,5Zm4-.0542-2,.667V4.3872l2,.667Zm4-1.333-2,.6665V5.7207l2,.6665Zm2-.667V7.0542L25.8379,9Z" transform="translate(0 0)"></path> <path d="M20,22a4,4,0,0,0-8,0h2a2,2,0,1,1,2,2H8v2h8A4.0045,4.0045,0,0,0,20,22Z" transform="translate(0 0)"></path> <path d="M26,22a4.0045,4.0045,0,0,0-4,4h2a2,2,0,1,1,2,2H12v2H26a4,4,0,0,0,0-8Z" transform="translate(0 0)"></path> <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect> </g></svg>';

const metric='metric';
const imperial='imperial';
const standard='standart';

const standardTextTemplate='&degK'
const metricTextTemplate='C&deg';
const imperialTextTemplate='&degF';

const standardTemplate='m/s'
const imperialTemplate='mi/h';

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let country; 

let unit=unitSelector.value;
let symbol=metricTextTemplate;
let metricSymbol=standardTemplate;

countryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    country=input.value;
    input.value='';
    data(country, unit);
});



unitSelector.addEventListener('change',(event)=>{
    const unitSelector=event.target.value;
    if(unitSelector==='metric'){
        unit='metric';
        metricSymbol=standardTemplate
        symbol=metricTextTemplate;
    }else if(unitSelector==='imperial'){
        unit='imperial';
        metricSymbol=imperialTemplate;
        symbol=imperialTextTemplate
    }else{
        unit='standard';
        metricSymbol=standardTemplate;
        symbol=standardTextTemplate;
    }
    console.log(metricSymbol);
    if(country){
        data(country,unit);
    }
    
})

const sortDataByDate=(data)=>{
    const arr=[];
    const todayForecastArr=data.list.filter(day=>day.dt_txt.split(' ')[0]===today);
    
    arr.push(todayForecastArr[0].dt_txt.split(' ')[0])
    arr.push(todayForecastArr[0]);
    
    data.list.forEach((listItem)=>{
        const date=listItem.dt_txt.split(' ')[0];

        if(!arr.includes(date)&&listItem.dt_txt.split(' ')[1]==='12:00:00'){
            arr.push(date);
            if(listItem.dt_txt.split(' ')[0]===date){
                arr.push(listItem);
            }
        }

    })
    console.log(arr);
    return arr;
}

function getCompassDirection(deg) {
    const directions = [
      "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
      "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"
    ];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
  }


const data=async(city,unit)=>{   
    if(city===''){
        return alert('Please insert city');
    }
    
    output.innerHTML=``;
    const url=`https://weather-app-ihdgfw.fly.dev/api?q=${city}&units=${unit}`;

    

    const res=await fetch(url);
        

    const data=await res.json();
    
    if(!data||data.message==='city not found'){
        document.getElementById('city-name').innerHTML='';
        document.getElementById('city-coordinates').innerHTML='';
        return alert('Inputed City/Country was not found');
    }
    
    const array=sortDataByDate(data);

    cityName.textContent=`
    ${data.city.name}, ${data.city.country}`;
    citycords.textContent=`Lattitude: ${data.city.coord.lat} | Longitude: ${data.city.coord.lon}
    `
    
    for(let i=1;i<array.length;i+=2){
        const iconarr=array[i].weather[0].icon;
        const iconData=(await fetch(`https://openweathermap.org/img/wn/${iconarr}@4x.png`)).url;
        const dateString = array[i].dt_txt.split(' ')[0];
        const date = new Date(dateString); 
        
        const dateData=array[i].dt_txt.split(' ')[0].split('-')[2];
        const monthData=parseInt(array[i].dt_txt.split(' ')[0].split('-')[1]);
        const dayOfWeekData = daysOfWeek[date.getDay()];
        const weatherDescriptionData=array[i].weather[0].main;
        const temp=Math.round(array[i].main.temp);
        const iconTemplate=`<img src="${iconData}" alt="weather-icon">`
        const humidityData=array[i].main.humidity;
        const windSpeedData=array[i].wind.speed;
        const windDirectionData=getCompassDirection(array[i].wind.deg);
        const windgustData=array[i].wind.gust;
        
        const container=document.createElement('div');
        container.className=`${dayOfWeekData} container`; 

        container.innerHTML=`
            <div class="container-inner-wrapper">
                <div>
                    <div>
                        <div class="date">${dateData} ${months[monthData-1]}</div>
                        <div class="weekDay">${dayOfWeekData}</div>
                    </div>
                    <div class="weather-info">
                        <div class="humidity">${humiditySvg} ${humidityData}%</div>
                        <div class="wind">${windSvg} ${windSpeedData} ${metricSymbol}</div>
                        <div class="wind-dir">${compassSvg} ${windDirectionData}</div>
                        <div class="wind-gust">${gustSvg} ${windgustData} ${metricSymbol}</div>
                    </div>
                </div>          
            </div>

            <div class="container-inner-wrapper-1">
                <div class="weather-description">${weatherDescriptionData}</div>
                <div>${iconTemplate}</div>
                   
            </div>
            <div class="temp" > ${temp}${symbol}</div> 
        `
        output.append(container);
    }
    console.log(data);
       
   
}


