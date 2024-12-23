/*Covid-19*/
document.getElementById("myBtn").addEventListener("click", () => {
        // getting data fetch api
        let country = document.getElementById("myCountry").value.toLowerCase();
        fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query%20`)
                // 
                .then(res => {
                        return res.json();
                })
                .then(data => {
                        console.log(data);
                        if (country === "") {
                                document.getElementById("alert").innerHTML =
                                        `<small class="text-warning my-2"  role="alert">
                                                <svg class="mb-1 alert-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                        class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                                        <path
                                                                d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" /><path
                                                                d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" /></svg> Please enter country name.
                                        </small>`
                        } else {
                                var countryImg = data.countryInfo.iso2.toLowerCase();
                                document.getElementById("myCountry").value = "";
                                document.getElementById("alert").innerHTML = "";
                                document.getElementById("covidInfo").innerHTML = `
                                        <div class="row my-3">
                                                <div class="col-md-5 col-sm-6">
                                                        <div class="card mb-3">
                                                                <div class="card-header bg-white py-3 align-middle">
                                                                        Cases
                                                                </div>
                                                                <div class="card-body">
                                                                        <div class="row">
                                                                                <div class="col-auto pr-2">
                                                                                        <img class="border country-thumbnail" width="30"
                                                                                                src="https://disease.sh/assets/img/flags/${countryImg}.png">
                                                                                </div>
                                                                                <div class="col-auto px-0">
                                                                                        <h5 class="card-title mb-3">${data.country}</h5>
                                                                                </div>
                                                                        </div>
                                                                        <div class="row mb-4">
                                                                                <div class="col-3 pr-1">
                                                                                        <small class="card-text">Total Cases</small>
                                                                                        <h4>${numberWithWord(data.cases)}</h4>
                                                                                </div>
                                                                                <div class="col-3 pr-1 border-left">
                                                                                        <small class="card-text">Active</small>
                                                                                        <h4>${numberWithWord(data.active)}</h4>
                                                                                </div>
                                                                                <div class="col-3 pr-1 border-left">
                                                                                        <small class="card-text">Recovered</small>
                                                                                        <h4>${numberWithWord(data.recovered)}</h4>
                                                                                </div>
                                                                                <div class="col-3 pr-1 border-left">
                                                                                        <small class="card-text">Deaths</small>
                                                                                        <h4>${numberWithWord(data.deaths)}</h4>
                                                                                </div>
                                                                        </div>
                                                                        <hr class="dropdown-divider">
                                                                        <div class="row mb-4">
                                                                                <span class="my-2">Todays Cases</span>
                                                                                <div class="col-3 pr-1">
                                                                                        <small class="card-text">Total Cases</small>
                                                                                        <h4>${numberWithWord(data.todayCases)}</h4>
                                                                                </div>
                                                                                <div class="col-3 pr-1 border-left">
                                                                                        <small class="card-text">Recovered</small>
                                                                                        <h4>${numberWithWord(data.todayRecovered)}</h4>
                                                                                </div>
                                                                                <div class="col-3 pr-1 border-left">
                                                                                        <small class="card-text">Deaths</small>
                                                                                        <h4>${numberWithWord(data.todayDeaths)}</h4>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="col-md-7 col-sm-6">
                                                        <div class="card mb-3">
                                                                <div class="card-header bg-white py-3 align-middle">
                                                                        Graph presentation
                                                                </div>
                                                                <div class="card-body">    
                                                                <div class="row">
                                                                                <div class="col-auto pr-2">
                                                                                        <img class="border country-thumbnail" width="30"
                                                                                                src="https://disease.sh/assets/img/flags/${countryImg}.png">
                                                                                </div>
                                                                                <div class="col-auto px-0">
                                                                                        <h5 class="card-title">${data.country}</h5> 
                                                                                        <div id="chart-alert"></div>
                                                                                </div>
                                                                        </div>                                               
                                                                        <div id="chartdiv"></div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>`
                                charts()
                        }
                })
                .catch(err => {
                        console.log(err);
                        document.getElementById("myCountry").value = "";
                        document.getElementById("alert").innerHTML =
                                `<small class="text-warning my-2"  role="alert">
                                                <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                                                        class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                                        <path
                                                                d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                                        <path
                                                                d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                                                </svg> Entered country is incorrect.
                                </small>`
                })

        //Chart fetch api
        url = `https://api.covid19api.com/dayone/country/${country}`
        fetch(url)
                .then(res => {
                        return res.json();
                })
                .then(data => {
                        console.log(data);
                })
                .catch(err => {
                        console.log(err);
                })
})

// chart
function charts() {
        /**
         * ---------------------------------------
         * This demo was created using amCharts 4.
         * 
         * For more information visit:
         * https://www.amcharts.com/
         * 
         * Documentation is available at:
         * https://www.amcharts.com/docs/v4/
         * ---------------------------------------
         */

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.XYChart);

        chart.dateFormatter.dateFormat = "MMM YYYY";
        chart.numberFormatter.numberFormat = "#.#a";
        chart.numberFormatter.bigNumberPrefixes = [
                { "number": 1e+3, "suffix": "K" },
                { "number": 1e+6, "suffix": "M" },
                { "number": 1e+9, "suffix": "B" }
        ];

        // Add data
        chart.dataSource.url = url;

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 80;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.verticalCenter = "bottom";
        valueAxis.renderer.labels.template.dx = -5;
        valueAxis.renderer.labels.template.dy = 10;
        valueAxis.renderer.maxLabelPosition = 0.95;
        valueAxis.title.marginRight = 5;

        // Create series
        function createSeries(field, name, color) {
                var series = chart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = field;
                series.dataFields.dateX = "Date";
                series.name = name;
                series.tooltip.label.background.fill = color;
                series.tooltipText = "[font-size: 12px;bold]{name}[/]\n[font-size: 12px]{dateX}: [font-size: 12px]{valueY}[/]";
                series.strokeWidth = 2;
                series.smoothing = "monotoneX";
                series.stroke = color;
                return series;
        }

        createSeries("Deaths", "Deaths", am4core.color("#eb2f06"), true);
        createSeries("Recovered", "Recovered", am4core.color("#78e08f"), true);
        createSeries("Active", "Active Cases", am4core.color("#f6b93b"), true);
        createSeries("Confirmed", "Total Cases", am4core.color("#1e3799"), true);

        chart.legend = new am4charts.Legend();
        chart.cursor = new am4charts.XYCursor();
}

// init view
function initView() {
        fetch(`https://corona.lmao.ninja/v2/all?yesterday`)
                .then(res => {
                        return res.json();
                })
                .then(data => {
                        console.log(data);
                        document.getElementById("covidInfo").innerHTML = `
                <div class="row my-3">
                        <div class="col-md-5 col-sm-6">
                                <div class="card my-3">
                                        <div class="card-header bg-white py-3 align-middle">
                                                Cases
                                        </div>
                                        <div class="card-body">
                                                <div class="row">
                                                        <div class="col-auto">
                                                                <h5 class="card-title mb-3">
                                                                        <svg class="mb-1 text-primary"
                                                                                xmlns="http://www.w3.org/2000/svg" width="20"
                                                                                height="20" fill="currentColor" class="bi bi-globe2"
                                                                                viewBox="0 0 16 16">
                                                                                 <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/></svg>
                                                                        Worldwide
                                                                </h5>
                                                        </div>
                                                </div>
                                                <div class="row mb-4">
                                                        <div class="col-3 pr-1">
                                                                <small class="card-text">Total Cases</small>
                                                                <h4>${numberWithWord(data.cases)}</h4>
                                                        </div>
                                                        <div class="col-3 pr-1 border-left">
                                                                <small class="card-text">Active</small>
                                                                <h4>${numberWithWord(data.active)}</h4>
                                                        </div>
                                                        <div class="col-3 pr-1 border-left">
                                                                <small class="card-text">Recovered</small>
                                                                <h4>${numberWithWord(data.recovered)}</h4>
                                                        </div>
                                                        <div class="col-3 pr-1 border-left">
                                                                <small class="card-text">Deaths</small>
                                                                <h4>${numberWithWord(data.deaths)}</h4>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div class="col-md-7 col-sm-6">
                                <div class="card my-3">
                                        <div class="card-header bg-white py-3 align-middle">
                                                Map presentation
                                        </div>
                                        <div class="card-body p-0">
                                               <div id="mapid"></div>
                                        </div>
                                </div>
                        </div>
                </div>`
                        initViewChart()
                })
                .catch(err => {
                        console.log(err);
                })
}
initView()

// init view chart
function initViewChart() {
        //Chart fetch api
        fetch(`https://corona.lmao.ninja/v2/countries`)
                .then(res => {
                        return res.json();
                })
                .then(data => {
                        // console.log(data);
                        var circle = [];
                        for (let i = 0; i < data.length; i++) {
                                let el = data[i];
                                circle.push({
                                        active: el.active,
                                        cases: el.cases,
                                        recovered: el.recovered,
                                        deaths: el.deaths,
                                        critical: el.critical,
                                        country: el.country,
                                        lat: el.countryInfo.lat,
                                        long: el.countryInfo.long,
                                        img: el.countryInfo.flag
                                });
                        }

                        var mymap = L.map('mapid').setView([10.45, 76.41], 2); //setView([lat, lon], 13)

                        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                                id: 'mapbox/streets-v11',
                                minZoom: 2,
                                zoom: 15,
                        }).addTo(mymap);

                        for (let i = 0; i < circle.length; i++) {
                                let el = circle[i];
                                L.circle([el.lat, el.long], 100, {
                                        color: '#de3700a6',
                                        fillColor: '#de3700a6',
                                        fillOpacity: 0.5,
                                }).addTo(mymap).bindPopup(
                                        `<img class="border country-thumbnail mb-1 d-inline" width="26" src="${el.img}"> 
                                        <h6 class="my-1 d-inline font-weight-bold mx-1"> ${el.country}</h6>
                                                      
                                                <p class="my-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="mb-1 mr-1 bi bi-circle-fill text-warning" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8"/>
                                                </svg>  Active: ${numberWithWord(el.active)}
                                                </p>
                                                <p class="my-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="mb-1 mr-1 bi bi-circle-fill text-success" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8"/>
                                                </svg>  Recovered: ${numberWithWord(el.recovered)}
                                                </p>
                                                <p class="my-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="mb-1 mr-1 bi bi-circle-fill text-danger" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8"/>
                                                </svg>  Deaths: ${numberWithWord(el.deaths)}
                                                </p>
                                        <hr class="dropdown-divider">
                                        <b class="text-danger">Total Cases: ${numberWithWord(el.cases)}</b>
                                        `);
                                mymap.on('zoomend', function (e) {
                                        var newRadius = Math.pow(mymap.getZoom(), 20);
                                        circle.setRadius(newRadius);
                                });
                        }
                })
                .catch(err => {
                        console.log(err);
                })

}

//convert number into M B K
function numberWithWord(labelValue) {
        const sign = Math.sign(Number(labelValue));
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e9
                ? sign * (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
                : // Six Zeroes for Millions
                Math.abs(Number(labelValue)) >= 1.0e6
                        ? sign * (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
                        : // Three Zeroes for Thousands
                        Math.abs(Number(labelValue)) >= 1.0e3
                                ? sign * (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
                                : Math.abs(Number(labelValue));
}