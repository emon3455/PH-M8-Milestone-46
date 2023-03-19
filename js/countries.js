const loadCountries=()=>{

    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries=(countries)=>{

    const container = document.getElementById("countries-container");
    container.innerHTML="";
     
    countries.forEach(country => {
        container.innerHTML +=`

            <div class="country">
                <h2>Name: ${country.name.common}</h2>
                <img src="${country.flags.png}" alt="">
            </div>

        `;

    });

}

loadCountries();