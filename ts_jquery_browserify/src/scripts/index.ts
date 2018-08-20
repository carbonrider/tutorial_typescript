// Logic goes here.

import $ from 'jquery';
import { StudentRepository } from './student';

$(document).ready(listStudentData);

function listStudentData() {
    const student = new StudentRepository();
    student.fetchStudents(renderStudents);
}

function renderStudents(data: any) {
    const students = data.data;
    let html = '';
    for (const student of students) {
        html += `<tr>
        <td>${student.id}</td>
        <td>${student.first_name}</td>
        <td>${student.last_name}</td>
        </tr>`;
    }
    $('#userListingTable').html(html);
}
