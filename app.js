import main from "./src/script/view/main.js"
import "./src/script/component/app-bar.js"
import "./src/script/component/search-bar.js"
import clubs from "./src/script/data/clubs.js"

document.addEventListener("DOMContentLoaded", main);

const clubElementItem = document.createElement('club-list')
            clubElementItem.clubs = clubs
            document.body.appendChild(clubElementItem)