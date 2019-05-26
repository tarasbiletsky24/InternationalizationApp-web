import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component/app.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { AppHeaderComponent } from './Components/app-header/app-header.component';
import { UserService } from './Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { TranslatePageComponent } from './Components/translate-page/translate-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AppHeaderComponent,
    MainPageComponent,
    SignUpComponent,
    TranslatePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [
    BrowserModule,
    HttpClientModule,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
