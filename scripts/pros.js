import { getPros } from "./database.js";

const pros = getPros();

export const Pros = () => {
    let prosHTML = "<ul>"

    for (const pro of pros) {
        prosHTML += `<li>${pro.name} - Hero Name: ${pro.heroName}</li>
                     <li>Quirk: ${pro.quirk}</li><br>`
    }

    prosHTML += "</ul>"

    return prosHTML
};