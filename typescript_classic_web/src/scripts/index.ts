
class UserSignup {

    public signup() {
        const nameValue = this.getInputValue('name');
        const jobValue = this.getInputValue('job');

        this.invokeAPI({
            'name': nameValue,
            'job': jobValue
        });
    }

    private successAlert() {
        window.alert('User successfully added.');
    }

    private invokeAPI(data: any) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://reqres.in/api/users');
        xhr.send(data);
        xhr.onload = this.successAlert;
    }

    private getInputValue(controlName: string): string {
        return (document.getElementById(controlName) as HTMLInputElement).value;
    }
}

function submitUserDetails() {
    const u: UserSignup = new UserSignup();
    u.signup();
    return false;
}
