import "./club-item.js"

class ClubList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set clubs(clubs) {
        this._clubs = clubs
        this.render()
    }

    renderError(message) {
        clubListElement.shadowDOM.innerHTML = "";
        clubListElement.shadowDOM.innerHTML += `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
         }
          
        </style>
        <h2 class="placeholder">${message}</h2>`
    }
    render() {
        this._clubs.forEach(club => {
            this.shadowDOM.innerHTML = ""
            const clubElementItem = document.createElement('club-item')
            clubElementItem.club = club
            this.shadowDOM.appendChild(clubElementItem)
        })
    }

}

customElements.define('club-list', ClubList)