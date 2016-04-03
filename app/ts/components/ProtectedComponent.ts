// Angular Imports

import {CanActivate} from 'angular2/router';
import {Component, Injector} from "angular2/core";

//Services
import {AuthService} from "services/AuthService";

@Component({
  selector: 'protected',
  template: `<h1>Protected content</h1>`
})
@CanActivate(
    (nextInstr: any, CurrInstr: any) => {
        let injector: any = Injector.resolveAndCreate([AuthService]);
        let authService: AuthService = injector.get(AuthService);
        return authService.isLogged();
    }
)
export class ProtectedComponent {
}