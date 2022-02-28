const erroMessage = document.getElementById('erro-message');
erroMessage.style.display = "none";
const loadCocks = () => {
    const searchText = document.getElementById('search-box');
    const searchValue = searchText.value;
    searchText.value = '';
    if (searchValue == '') {
        erroMessage.style.display = "block";
    }
    else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayCocks(data.drinks))
    }


}
const displayCocks = cocks => {
    console.log(cocks)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    cocks.forEach(cock => {
        console.log(cock)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `     
            <div onclick="loadCockId(${cock.idDrink})" class="card">
                <img src="${cock.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cock.strDrink}</h5>
                    <p class="card-text">${cock.strInstructions.slice(0, 150)}</p>
                    
                </div>
            </div>
        `;
        searchResult.appendChild(div)
    })
}

const loadCockId = id => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCockDetails(data.drinks[0]))
}
const displayCockDetails = info => {
    console.log(info)
    const cockDetails = document.getElementById('cock-Details');
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${info.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${info.strDrink}</h5>
            <p class="card-text">${info.strInstructions.slice(0, 150)}</p>
            <a href="${info.strImageSource}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    cockDetails.appendChild(div)
}
