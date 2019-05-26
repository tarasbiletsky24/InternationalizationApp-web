import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { TranslatePageComponent } from './Components/translate-page/translate-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'translate', component: TranslatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
