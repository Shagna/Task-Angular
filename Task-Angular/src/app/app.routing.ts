

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultComponent } from './result/result.component';
import { TodosresultComponent } from './todosresult/todosresult.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
    { path: 'todoresult', component: TodosresultComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', component: PagenotfoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);