import { getVillains } from "./database.js";

const villains = getVillains();

export const Villains = () => {
    let villainsHTML = "<ul>"

    for (const villain of villains) {
        villainsHTML += `<li>${villain.name} - Hero Name: ${villain.villainName}</li>
        <li>Quirk: ${villain.quirk}</li><br>`
    }

    villainsHTML += "</ul>"

    return villainsHTML
};