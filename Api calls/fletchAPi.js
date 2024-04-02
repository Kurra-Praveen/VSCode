let p=fetch("https://restcountries.com/v3.1/capital/new%20delhi")



p.then((response) => response.json())

.then((data) => console.log(data));