import { getPros } from "./database.js";

const pros = getPros();

export const Pros = () => {
    let prosHTML = ""

    const proCard = (pro) => {
        return (`
        <article class="heroCard">
        <div><img class="image" src="images/${pro.image}" /></div>
                <div><h3 class="name">${pro.heroName}</h3>
                <ul>
                    <li class="card-details">Real Name: ${pro.name}</li>
                    <li class="card-details">Quirk: ${pro.quirk} -</li>
                    <dd class="card-details">${pro.quirkDescription}</dd>
                </ul></div>
        </article>
        `)
    }

    for (const pro of pros) {
        prosHTML += proCard(pro)
    }

    return prosHTML
};