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

    }

    logout(): any {
        localStorage.removeItem('username');
    }

}