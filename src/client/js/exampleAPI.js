function apiCall() {
    fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=46250&appid=3c9639b2d937cc613e77cf142beccbe4')
    .then(res => {
        return res.json()
    })
    .then((data) => {
        document.getElementById('results').innerHTML = data.main.temp
    })
}

export { apiCall }