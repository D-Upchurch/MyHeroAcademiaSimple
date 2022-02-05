import { getStudents } from "./database.js";

const students = getStudents();

export const Students = () => {
    let studentHTML = ""

    const studentCard = (student) => {
        return (`
            <article class="heroCard">
                <div><img class="image" src="images/${student.image}" /></div>
                <div><h3 class="name">${student.heroName}</h3>
                <ul>
                    <li class="card-details">Real Name: ${student.name}</li>
                    <li class="card-details">Quirk: ${student.quirk} -</li>
                    <dd class="card-details">${student.quirkDescription}</dd>
                </ul></div>
            </article>
        `)
    }

    for (const student of students) {
        studentHTML += studentCard(student)
    }

    return studentHTML;
};