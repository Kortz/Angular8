import { AuthToken } from './auth-token.model';

export class User {
    email: string;
    token: AuthToken;
    private expiryDate: Date;

    constructor(token: AuthToken) {
        this.email = token.email;
        this.token = token;
        this.expiryDate = new Date(new Date().getTime() + (+token.expiresIn * 1000));
    }

    getTokenId() {
        return this.token.idToken;
    }

    getExpiryDate() {
        return new Date(this.expiryDate.getTime());
    }

    getEmail() {
        return this.token.email;
    }

    getUserId() {
        return this.token.localId;
    }

    isUserValid() {
        return this.token != null && ((new Date()) < this.getExpiryDate());
    }

}
