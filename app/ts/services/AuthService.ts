import {Injectable, provide} from 'angular2/core';

@Injectable()
export class AuthService {
    login (user: string, password: string): boolean {
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
        return this.getUser() !== null;
    }

    logout(): any {
        localStorage.removeItem('username');
    }

}

export var AUTH_PROVIDERS: Array<any> = [
    provide(AuthService, {useClass: AuthService})
];
