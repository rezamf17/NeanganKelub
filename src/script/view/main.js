const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        clubListElement.innerHTML = "";
        results.forEach((club) => {

            // ({name, fanArt, description} = club);
            // or
            const {name, fanARt, description} = club;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            clubElement.innerHTML = `<img class="fan-art-club" src="${club.fanArt}" alt="Fan Art">
            <div class="club-info">
            <h2>${club.name}</h2>
            <p>${club.description}</p>
            </div>`;
            clubListElement.appendChild(clubElement);
        })
    };
    const fallbackResult = message => {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};