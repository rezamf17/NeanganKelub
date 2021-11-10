import "./club-item.js"

class ClubList extends HTMLElement {
    set clubs(clubs) {
        this._clubs = clubs
        this.render()
    }

    render() {
        this._clubs.forEach(club => {
            this.innerHTML = ""
            const clubElementItem = document.createElement('club-item')
            clubElementItem.club = club
            this.appendChild(clubElementItem)
        })
    }

    renderError(message) {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
}

customElements.define('club-list', ClubList)