const loadCountries=()=>{

    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries=(countries)=>{

    const container = document.getElementById("countries-container");
    container.innerHTML="";

    countries.forEach(country => {
        const {name,flags,region} = country;
        container.innerHTML +=`

            <div class="country">
                <h2>Name: ${name.common}</h2>
                <p> Region: ${region} </p>
                <img src="${flags.png}" alt="">
            </div>
        `;

    });

}

loadCountries();