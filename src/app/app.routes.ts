import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import LogInComponent from './log-in/log-in.component';
import { InvestmentOptionsComponent } from './investment-options/investment-options.component';
import { InitialAmountComponent } from './initial-amount/initial-amount.component';
import { ContractedServicesComponent } from './contracted-services/contracted-services.component';

export const routes: Routes = [
    { path: 'login', component: LogInComponent },
    { path: 'options', component: InvestmentOptionsComponent},
    { path: 'user', component: UserCardComponent },
    { path: 'initial-amount', component: InitialAmountComponent},
    { path: 'contracted', component: ContractedServicesComponent},
    { path: '', redirectTo:'/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' } 
];
export class AppRoutingModule { }