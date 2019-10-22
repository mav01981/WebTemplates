import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";


export const APP_ROUTES: Routes = [
    {
        path: '', component: AppComponent, children: [
            {
                path: '',
                component: HomeComponent, canActivate: [AuthGuard]
            },
            {
                path: 'login',
                component: LoginComponent,
                //canActivate: [AuthGuard]
            },
            {
                path: 'home',
                component: HomeComponent, canActivate: [AuthGuard]
            }
        ]
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
