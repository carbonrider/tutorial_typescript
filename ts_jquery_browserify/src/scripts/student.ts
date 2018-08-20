import $ from 'jquery';

export class StudentRepository {
    public fetchStudents(callback: any) {
        $.ajax(
            {
                method: 'GET',
                url: 'https://reqres.in/api/users?page=2'
            }
        ).then((data) => {
            callback(data);
        });
    }
}
