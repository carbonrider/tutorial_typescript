import { UserRepository } from './user';
import { IAPIResponse } from './usermodel';

import $ from 'jquery';

$(document).ready(invokeAPI);

function invokeAPI() {
    const userRepo = new UserRepository();
    userRepo.fetchUsers(renderUsers);
}

function renderUsers(response: IAPIResponse) {
    let tableHtml = `<tr><td>Id</td><td>First name</td><td>Last name</td></tr>`;
    for (const user of response.data) {
        tableHtml += `<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td></tr>`;
    }
    $('#userListingTable').html(tableHtml);
}
