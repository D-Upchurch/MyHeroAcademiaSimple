import { getVillains } from "./database.js";

const villains = getVillains();

export const Villains = () => {
    let villainsHTML = ""

    const villainCard = (villain) => {
        return (`
        <article class="villainCard">
        <div><img class="image" src="images/${villain.image}" /></div>
        <div><h3 class="name">${villain.villainName}</h3>
        <ul>
            <li class="card-details">Real Name: ${villain.name}</li>
            <li class="card-details">Quirk: ${villain.quirk} -</li>
            <dd class="card-details">${villain.quirkDescription}</dd>
        </ul></div>
        </article>
        `)
    }

    for (const villain of villains) {
        villainsHTML += villainCard(villain)
    }

    return villainsHTML
};