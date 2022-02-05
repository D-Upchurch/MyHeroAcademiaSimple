import { Students } from "./students.js";
import { Pros } from "./pros.js";
import { Villains } from "./villains.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>My Hero Academia Characters</h1>
    <section>
        <h2>Students of Class 1-A</h2>
        <div class="students">${Students()}</div>
    </section>

    <section>
        <h2>Pro Heroes</h2>
        <div class="pros">${Pros()}</div>
    </section>

    <section>
        <h2>Villains</h2>
        <div class="villains">${Villains()}</div>
    </section>
`

mainContainer.innerHTML = applicationHTML;