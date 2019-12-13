export class AuthService {
    // tslint:disable-next-line: no-inferrable-types
    loggedIn: boolean = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    logIn() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}
