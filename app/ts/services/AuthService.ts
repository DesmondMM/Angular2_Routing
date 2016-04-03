import {Injectable, provide} from 'angular2/core';

@Injectable()
export class AuthService {
    login (user: string, string, password: string): boolean {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }

        return false;
    }

    getUser(): any {
        return localStorage.getItem('username');
    }

    isLogged(): boolean {
        return this.getUser() !==null;
    }

    logout(): any {
        localStorage.removeItem('username');
    }

}