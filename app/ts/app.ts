import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES,
        ROUTER_PROVIDERS,
        HashLocationStrategy,
        RouteConfig,
        } from 'angular2/router';

// Component Imports
import {HomeComponent} from 'components/HomeComponent';
import {AboutComponent} from 'components/AboutComponent';
import {ContactComponent} from 'components/ContactComponent';
import {LoginComponent} from 'components/LoginComponent';
import {ProtectedComponent} from 'components/ProtectedComponent';
import {LocationStrategy} from 'angular2/router';
;

// Services
import {AUTH_PROVIDERS} from 'services/AuthService';

// Require
require('css/styles.scss');

@Component({
    selector: 'router-app',
    directives: [ROUTER_DIRECTIVES, LoginComponent],
    template: `
    <div class="page-header">
        <div class="container">
            <h1>Router Sample</h1>
            <div class="navLinks">
                <a [routerLink]="['/Home']">Home</a>
                <a [routerLink]="['/About']">About</a>
                <a [routerLink]="['/Contact']">Contact</a>
                <a [routerLink]="['/Protected']">Protected</a>
            </div>
        </div>
    </div>

    <div id="content">
        <div class="container">

            <login></login>

            <hr>
            <router-outlet></router-outlet>
        </div>
    </div>
    `
})
@RouteConfig([
    {path: '/', name: 'root', redirectTo: ['/Home']},
    {path: '/home', name: 'Home', component: HomeComponent},
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/contactus', name: 'contactus', redirectTo: ['/Contact']},
    {path: '/protected', name: 'Protected', component: ProtectedComponent},
])
class RouteApp {

}

bootstrap(RouteApp,
          [ROUTER_PROVIDERS,
          AUTH_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy})]);
