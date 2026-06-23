export class LoginPage {

    constructor(page) {
        this.page = page;

        this.txtEmail = page.getByPlaceholder('Email');
        this.txtPassword = page.getByPlaceholder('Password');
        this.btnSignIn = page.getByRole('button', { name: 'SIGN IN' });
    }

    async login(username, password) {
        await this.txtEmail.fill(username);
        await this.txtPassword.fill(password);
        await this.btnSignIn.click();
    }
}