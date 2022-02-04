import { Students } from "./students.js";
import { Pros } from "./pros.js";
import { Villains } from "./villains.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>My Hero Academia Characters</h1>
<article class="students">
    <section>
        <h2>Students of Class 1-A</h2>
        ${Students()}
    </section>
</article>
<article class="pros">
    <section>
        <h2>Pro Heroes</h2>
        ${Pros()}
    </section>
</article>
<article class="villains">
    <section>
        <h2>Villains</h2>
        ${Villains()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML;