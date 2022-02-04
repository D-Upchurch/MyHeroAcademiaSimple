import { getStudents } from "./database.js";

const students = getStudents();

export const Students = () => {
    let studentHTML = "<ul>"

    for (const student of students) {
        studentHTML += `<li>${student.name} - Hero Name: ${student.heroName}</li>
                        <li>Quirk: ${student.quirk}</li><br>`
    }

    studentHTML += "</ul>"

    return studentHTML;
};